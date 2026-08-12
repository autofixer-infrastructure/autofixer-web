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

    // Delegar al backend NestJS (que persiste en PostgreSQL + envía email)
    const nestResponse = await fetch(NESTJS_CONTACT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
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
      console.error('NestJS contact error:', nestResponse.status, await nestResponse.text());
      return NextResponse.json({ error: 'Error al procesar' }, { status: 500 });
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
