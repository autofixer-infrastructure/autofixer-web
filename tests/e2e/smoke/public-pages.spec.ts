import { test, expect } from '@playwright/test';

const BASE_URL = process.env.BASE_URL || 'https://autofixer.cl';

test.describe('Páginas públicas - Smoke', () => {
  test('Home carga correctamente', async ({ page }) => {
    const response = await page.goto(BASE_URL);
    expect(response?.status()).toBe(200);

    const h1 = await page.locator('h1').first().textContent();
    expect(h1).toBeTruthy();
    expect(h1?.length).toBeGreaterThan(5);
  });

  test('Contacto carga correctamente', async ({ page }) => {
    const response = await page.goto(`${BASE_URL}/contacto`);
    expect(response?.status()).toBe(200);

    // Form controlado por React: usa placeholders, no atributos name
    await expect(page.locator('input[placeholder="Tu nombre"]')).toBeVisible();
    await expect(page.locator('input[placeholder="tu@email.com"]')).toBeVisible();
    await expect(page.locator('textarea[placeholder*="Describe tu problema"]')).toBeVisible();
  });

  test('Cobertura Santiago carga correctamente', async ({ page }) => {
    const response = await page.goto(`${BASE_URL}/cobertura/santiago`);
    expect(response?.status()).toBe(200);

    const h1 = await page.locator('h1').first().textContent();
    expect(h1?.toLowerCase()).toContain('santiago');
  });

  test('Servicio individual carga correctamente', async ({ page }) => {
    const response = await page.goto(`${BASE_URL}/servicios/diagnostico`);
    expect(response?.status()).toBe(200);
  });

  test('Sitemap accesible', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/sitemap.xml`);
    expect(response.status()).toBe(200);
    const body = await response.text();
    expect(body).toContain('<?xml');
  });

  test('Robots.txt accesible', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/robots.txt`);
    expect(response.status()).toBe(200);
  });
});

test.describe('Cobertura por comuna', () => {
  test('Comuna válida carga', async ({ page }) => {
    const response = await page.goto(`${BASE_URL}/cobertura/providencia`);
    expect(response?.status()).toBe(200);
  });

  test('Comuna inválida devuelve 404', async ({ page }) => {
    const response = await page.goto(`${BASE_URL}/cobertura/xxxx-no-existe`);
    expect(response?.status()).toBe(404);
  });
});
