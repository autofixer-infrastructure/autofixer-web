import { test, expect } from '@playwright/test';

const BASE_URL = process.env.BASE_URL || 'https://autofixer.cl';

test.describe('API Contact', () => {
  test('POST /api/contact con datos válidos', async ({ request }) => {
    const response = await request.post(`${BASE_URL}/api/contact`, {
      data: {
        name: 'Test E2E Valid',
        email: `e2e-valid-${Date.now()}@autofixer.cl`,
        phone: '+56912345678',
        message: 'Test E2E message - DELETEME by cleanup',
      },
    });

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.success).toBe(true);
    expect(body.id).toBeTruthy();
  });

  test('POST /api/contact con email inválido → 400', async ({ request }) => {
    const response = await request.post(`${BASE_URL}/api/contact`, {
      data: {
        name: 'Test',
        email: 'no-email',
        message: 'Mensaje de más de 10 chars',
      },
    });
    expect(response.status()).toBe(400);
  });

  test('POST /api/contact con mensaje corto → 400', async ({ request }) => {
    const response = await request.post(`${BASE_URL}/api/contact`, {
      data: {
        name: 'Test',
        email: 'test@test.com',
        message: 'corto',
      },
    });
    expect(response.status()).toBe(400);
  });
});
