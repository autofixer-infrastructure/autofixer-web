'use client';

import { useEffect } from 'react';
import { onLCP, onFCP, onTTFB, onCLS, onINP } from 'web-vitals';

export function WebVitalsDebug() {
  useEffect(() => {
    // Solo activar con ?debug=lcp query param
    if (typeof window === 'undefined' || !window.location.search.includes('debug=lcp')) {
      return;
    }

    console.log('🔍 [WebVitalsDebug] ACTIVADO con ?debug=lcp');

    const reportToConsole = (metric: any) => {
      const entries = metric.entries || [];
      const lastEntry = entries[entries.length - 1];

      console.log(`📊 [WebVitals] ${metric.name}:`, {
        value: Math.round(metric.value * 1000) / 1000,
        unit: metric.name === 'CLS' ? '' : 'ms',
        rating: metric.rating,
        id: metric.id,
        navigationType: metric.navigationType,
      });

      if (metric.name === 'LCP' && lastEntry) {
        const el = lastEntry.element;
        const size = lastEntry.size;
        const url = lastEntry.url;
        const loadTime = lastEntry.loadTime;

        console.log('🎯 [LCP ELEMENT] Elemento exacto:', {
          tagName: el?.tagName,
          id: el?.id,
          className: typeof el?.className === 'string' ? el.className.substring(0, 200) : '',
          textContent: el?.textContent?.substring(0, 200),
          url: url || el?.src || el?.currentSrc || 'NO URL (es texto/div)',
          size_bytes: size,
          loadTime_ms: loadTime,
          renderTime: lastEntry.renderTime || lastEntry.startTime,
          // Critico: opacity al momento del LCP
          computedStyle: el ? {
            opacity: window.getComputedStyle(el).opacity,
            visibility: window.getComputedStyle(el).visibility,
            display: window.getComputedStyle(el).display,
            fontSize: window.getComputedStyle(el).fontSize,
          } : null,
        });

        if (el) {
          console.log('🎯 [LCP HTML]', el.outerHTML.substring(0, 800));
        }
      }
    };

    onLCP(reportToConsole);
    onFCP(reportToConsole);
    onTTFB(reportToConsole);
    onCLS(reportToConsole);
    onINP(reportToConsole);

    // PerformanceObserver para recursos bloqueantes
    const resourceObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries() as PerformanceResourceTiming[]) {
        if (entry.initiatorType === 'img' ||
            entry.initiatorType === 'video' ||
            entry.initiatorType === 'fetch' ||
            entry.duration > 200) {
          console.log('📦 [Resource]', {
            name: entry.name.substring(0, 150),
            type: entry.initiatorType,
            duration_ms: Math.round(entry.duration),
            transferSize_kb: Math.round(entry.transferSize / 1024),
            startTime_ms: Math.round(entry.startTime),
            responseEnd: Math.round(entry.responseEnd),
          });
        }
      }
    });
    resourceObserver.observe({ entryTypes: ['resource'] });

    // LCP subparts (qué contribuyó al LCP)
    const lcpSubpartsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries() as any[]) {
        console.log('⏱️ [LCP Subpart]', {
          url: entry.url,
          type: entry.entryType,
          size: entry.size,
          startTime: Math.round(entry.startTime),
          loadTime: Math.round(entry.loadTime || 0),
          renderTime: Math.round(entry.renderTime || 0),
        });
      }
    });

    try {
      lcpSubpartsObserver.observe({ type: 'largest-contentful-paint', buffered: true });
    } catch (e) {
      console.warn('LCP subparts no soportado en este browser');
    }

    return () => {
      resourceObserver.disconnect();
      lcpSubpartsObserver.disconnect();
    };
  }, []);

  return null;
}

