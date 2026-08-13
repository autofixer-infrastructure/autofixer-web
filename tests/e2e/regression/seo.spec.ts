import { test, expect } from '@playwright/test';

const BASE_URL = process.env.BASE_URL || 'https://autofixer.cl';

test.describe('SEO básico', () => {
  test('Home tiene meta description', async ({ page }) => {
    await page.goto(BASE_URL);
    const description = await page.locator('meta[name="description"]').getAttribute('content');
    expect(description).toBeTruthy();
    expect(description?.length).toBeGreaterThan(50);
  });

  test('Home tiene Open Graph tags', async ({ page }) => {
    await page.goto(BASE_URL);
    const ogImage = await page.locator('meta[property="og:image"]').getAttribute('content');
    expect(ogImage).toBeTruthy();
  });

  test('Comuna tiene og:image', async ({ page }) => {
    await page.goto(`${BASE_URL}/cobertura/providencia`);
    const ogImage = await page.locator('meta[property="og:image"]').getAttribute('content');
    expect(ogImage).toBeTruthy();
    expect(ogImage).toContain('autofixer.cl');
  });

  test('Home tiene JSON-LD Organization', async ({ page }) => {
    await page.goto(BASE_URL);
    // Parsear todos los JSON-LD y verificar que al menos uno sea Organization
    const schemas = await page.locator('script[type="application/ld+json"]').allTextContents();
    const hasOrganization = schemas.some(s => {
      try {
        const parsed = JSON.parse(s);
        if (parsed['@type'] === 'Organization') return true;
        if (parsed['@graph'] && Array.isArray(parsed['@graph'])) {
          return parsed['@graph'].some((g: any) => g['@type'] === 'Organization');
        }
        return false;
      } catch { return false; }
    });
    expect(hasOrganization).toBe(true);
  });
});
