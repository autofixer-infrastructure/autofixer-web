import { NextRequest, NextResponse } from 'next/server'

/**
 * POST /api/contact
 *
 * Public contact form. Validates Cloudflare Turnstile server-side before
 * accepting the message.
 *
 * Test keys (sandbox only — always pass):
 *   secret: 1x0000000000000000000000000000000AA
 *
 * Real keys: set TURNSTILE_SECRET in .env.local (server-side only,
 * NOT NEXT_PUBLIC_*) and replace this with the real secret.
 */
const TURNSTILE_SECRET =
  process.env.TURNSTILE_SECRET ||
  '1x0000000000000000000000000000000AA'

const TURNSTILE_VERIFY_URL =
  'https://challenges.cloudflare.com/turnstile/v0/siteverify'

async function verifyTurnstile(
  token: string,
  remoteIp?: string,
): Promise<{ ok: boolean; errors?: string[] }> {
  if (!token) return { ok: false, errors: ['missing-input-response'] }

  // Allow test secret to short-circuit (sandbox / dev only).
  // When you switch to real Cloudflare keys, this branch won't match
  // and the real siteverify call will run.
  if (TURNSTILE_SECRET === '1x0000000000000000000000000000000AA') {
    return { ok: true }
  }

  const body = new URLSearchParams()
  body.append('secret', TURNSTILE_SECRET)
  body.append('response', token)
  if (remoteIp) body.append('remoteip', remoteIp)

  try {
    const res = await fetch(TURNSTILE_VERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    })
    const data = (await res.json()) as { success: boolean; 'error-codes'?: string[] }
    if (!data.success) {
      return { ok: false, errors: data['error-codes'] || ['unknown'] }
    }
    return { ok: true }
  } catch {
    return { ok: false, errors: ['network-error'] }
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message, turnstileToken } = body

    // 1) Validate Turnstile
    const remoteIp =
      request.headers.get('cf-connecting-ip') ||
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      undefined

    const turnstile = await verifyTurnstile(turnstileToken, remoteIp)
    if (!turnstile.ok) {
      return NextResponse.json(
        {
          success: false,
          error:
            'Verificación de seguridad fallida. Recarga la página e intenta nuevamente.',
        },
        { status: 400 },
      )
    }

    // 2) Validate fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Nombre, email y mensaje son requeridos' },
        { status: 400 },
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Formato de email inválido' },
        { status: 400 },
      )
    }

    // 3) Process (in-memory demo — replace with email/DB in production)
    const contactId = `CT${Date.now().toString(36).toUpperCase()}`
    await new Promise((resolve) => setTimeout(resolve, 500))

    return NextResponse.json({
      success: true,
      data: {
        id: contactId,
        message:
          'Mensaje enviado con éxito. Te responderemos en menos de 24 horas.',
      },
    })
  } catch (error) {
    console.error('Contact error:', error)
    return NextResponse.json(
      { success: false, error: 'Error interno del servidor' },
      { status: 500 },
    )
  }
}
