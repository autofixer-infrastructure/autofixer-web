'use client';

/**
 * Cloudflare TurnstileProvider
 *
 * Loads the Turnstile script once, renders an invisible widget, and exposes
 * the current token via a ref-callback. No external npm packages.
 *
 * Usage:
 *   const { tokenRef, containerRef } = useTurnstile();
 *   ...
 *   <TurnstileWidget containerRef={containerRef} onToken={(t) => tokenRef.current = t} />
 *   ...
 *   if (!tokenRef.current) return; // require token before submit
 *
 * The widget is invisible (data-size="invisible") — no UI friction.
 *
 * Cloudflare test site key (sandbox only — always passes):
 *   1x00000000000000000000AA
 *
 * Real keys: https://dash.cloudflare.com → Turnstile → Add Widget
 * Set NEXT_PUBLIC_TURNSTILE_SITE_KEY in .env.local (already in .env.example).
 */

import { useEffect, useRef, useCallback } from 'react';

const TURNSTILE_SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '';

declare global {
  interface Window {
    turnstile?: {
      render: (
        el: HTMLElement,
        opts: {
          sitekey: string;
          size?: 'invisible' | 'normal' | 'compact';
          callback?: (token: string) => void;
          'error-callback'?: () => void;
          'expired-callback'?: () => void;
        },
      ) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

export function useTurnstile() {
  const tokenRef = useRef<string>('');
  const containerRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<string | null>(null);
  const onTokenRef = useRef<((t: string) => void) | null>(null);

  const setOnToken = useCallback((cb: (t: string) => void) => {
    onTokenRef.current = cb;
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!TURNSTILE_SITE_KEY) {
      console.warn('[Turnstile] NEXT_PUBLIC_TURNSTILE_SITE_KEY is not set');
      return;
    }

    const renderWidget = () => {
      if (!window.turnstile || !containerRef.current) return;
      // Avoid double-render
      if (widgetIdRef.current) {
        try { window.turnstile.reset(widgetIdRef.current); } catch {}
        return;
      }
      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        size: 'invisible',
        callback: (token: string) => {
          tokenRef.current = token;
          if (onTokenRef.current) onTokenRef.current(token);
        },
        'error-callback': () => {
          tokenRef.current = '';
          if (onTokenRef.current) onTokenRef.current('');
        },
        'expired-callback': () => {
          tokenRef.current = '';
          if (onTokenRef.current) onTokenRef.current('');
        },
      });
    };

    if (window.turnstile) {
      renderWidget();
      return;
    }

    if (document.querySelector(`script[src="${TURNSTILE_SCRIPT_SRC}"]`)) {
      // Script tag already exists, wait for load
      const interval = setInterval(() => {
        if (window.turnstile) {
          clearInterval(interval);
          renderWidget();
        }
      }, 100);
      return () => clearInterval(interval);
    }

    const script = document.createElement('script');
    script.src = TURNSTILE_SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.onload = renderWidget;
    document.head.appendChild(script);

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        try { window.turnstile.remove(widgetIdRef.current); } catch {}
        widgetIdRef.current = null;
      }
    };
  }, []);

  return { tokenRef, containerRef, setOnToken };
}

/**
 * Standalone widget component (renders the cf-turnstile div).
 * Use the containerRef from useTurnstile() above.
 */
export function TurnstileWidget({
  containerRef,
  className = '',
}: {
  containerRef: React.RefObject<HTMLDivElement | null>;
  className?: string;
}) {
  // Mount the div; the hook will render() into it.
  return <div ref={containerRef} className={className} data-turnstile="true" />;
}
