import { test, expect } from '@playwright/test';

const BASE_URL = process.env.BASE_URL || 'https://autofixer.cl';

test.describe('API Services', () => {
  test('GET /api/v1/services → 200', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/api/v1/services`);
    expect(response.status()).toBe(200);
  });

  test('GET /api/v1/services/INVALID → 404', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/api/v1/services/INVALID`);
    expect(response.status()).toBe(404);
  });
});
