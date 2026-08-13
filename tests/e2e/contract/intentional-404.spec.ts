import { test, expect } from '@playwright/test';

/**
 * Tests de CONTRATO: documentan comportamiento esperado de paths que
 * intencionalmente devuelven 404.
 *
 * Estos tests previenen regresiones: si alguno de estos paths empieza
 * a devolver 200 sin decisión explícita, el test falla.
 *
 * Agregados en Sprint 61 tras diagnóstico de Sprint 60.
 *
 * Cada path está documentado con la razón del 404:
 *   - /servicios/cambio-correa -> servicio existe en BD pero se presenta bajo
 *     /servicios/mantenimiento-preventivo (mapeo SERVICE_TO_FRONTEND_SLUG).
 *   - /api/v1/communes -> endpoint no publico; el frontend lee comunas de
 *     comuna-data.ts (datos estaticos en el bundle, no en BD).
 *   - /login, /register -> autenticacion publica no implementada.
 *     Solo el panel admin tiene login en /admin/panel/login.
 */

const BASE_URL = process.env.BASE_URL || 'https://autofixer.cl';

test.describe('Contrato: 404 intencionales', () => {
  test('/servicios/cambio-correa -> 404 (servicio no publico)', async ({ page }) => {
    const response = await page.goto(`${BASE_URL}/servicios/cambio-correa`);
    expect(response?.status()).toBe(404);
  });

  test('/api/v1/communes -> 404 (endpoint no publico)', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/api/v1/communes`);
    expect(response.status()).toBe(404);
  });

  test('/login -> 404 (autenticacion publica no implementada)', async ({ page }) => {
    const response = await page.goto(`${BASE_URL}/login`);
    expect(response?.status()).toBe(404);
  });

  test('/register -> 404 (autenticacion publica no implementada)', async ({ page }) => {
    const response = await page.goto(`${BASE_URL}/register`);
    expect(response?.status()).toBe(404);
  });
});
