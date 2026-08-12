import { NextRequest, NextResponse } from 'next/server';

const NESTJS_CONTACT_URL =
  process.env.NESTJS_CONTACT_URL || 'http://127.0.0.1:3001/api/v1/contact';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message, turnstileToken, serviceSlug } = body;

    // Validación local (defense in depth)
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Email inválido' }, { status: 400 });
    }
    if (typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json({ error: 'Mensaje debe tener al menos 10 caracteres' }, { status: 400 });
    }

    // Sprint 54 BUG #1: forward the real client IP to the backend.
    // Next.js makes the fetch to NestJS as a local connection (127.0.0.1),
    // so without these headers the backend always sees req.ip=127.0.0.1
    // and the ThrottlerGuard groups all visitors under one IP bucket.
    // We forward what Nginx sent us so the backend can store the real IP
    // and rate-limit per-visitor.
    const clientIp =
      req.headers.get('cf-connecting-ip') ||
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      req.headers.get('x-real-ip') ||
      undefined;

    // Delegar al backend NestJS (que persiste en PostgreSQL + envía email)
    const nestResponse = await fetch(NESTJS_CONTACT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(clientIp ? { 'X-Forwarded-For': clientIp, 'X-Real-IP': clientIp } : {}),
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
        source: 'contact_form',
        serviceSlug,
        userAgent: req.headers.get('user-agent') || undefined,
        referrer: req.headers.get('referer') || undefined,
      }),
    });

    if (!nestResponse.ok) {
      const errText = await nestResponse.text();
      console.error('NestJS contact error:', nestResponse.status, errText);
      // Sprint 54 BUG #2: propagate the real upstream status (e.g. 429 from
      // ThrottlerGuard) instead of masking everything as 500. The client
      // needs to see 429 to render a "try again later" message.
      let body: any = { error: 'Error al procesar' };
      try {
        const parsed = JSON.parse(errText);
        // NestJS HttpExceptionFilter returns { message, error, statusCode }
        if (parsed && parsed.message) body = parsed;
      } catch {
        // errText was not JSON; keep the generic message
      }
      return NextResponse.json(body, { status: nestResponse.status });
    }

    const result = await nestResponse.json();
    return NextResponse.json({
      success: true,
      id: result.id,
      message: result.message || 'Mensaje recibido. Te contactaremos pronto.',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Error al procesar' }, { status: 500 });
  }
}
