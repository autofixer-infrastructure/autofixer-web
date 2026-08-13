import { test, expect } from '@playwright/test';

/**
 * IMPORTANTE: Este test DEBE correr aislado.
 * El throttler del backend limita por IP, no por User-Agent.
 */

const BASE_URL = process.env.BASE_URL || 'https://autofixer.cl';

test.describe.serial('API Rate Limit (aislado)', () => {
  test('12+ requests a /api/contact desde misma IP devuelve 429', async ({ request }) => {
    const responses: number[] = [];

    for (let i = 0; i < 15; i++) {
      const response = await request.post(`${BASE_URL}/api/contact`, {
        data: {
          name: `Rate Test ${i}`,
          email: `ratetest${Date.now()}-${i}@autofixer.cl`,
          phone: '+56912345678',
          message: 'Rate limit test - DELETEME by cleanup',
        },
      });
      responses.push(response.status());
      await new Promise(r => setTimeout(r, 200));
    }

    const got429 = responses.some(s => s === 429);
    expect(got429).toBe(true);
    console.log('Status sequence:', responses.join(', '));
  });
});
