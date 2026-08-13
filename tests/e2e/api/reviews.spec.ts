import { test, expect } from '@playwright/test';

const BASE_URL = process.env.BASE_URL || 'https://autofixer.cl';

test.describe('API Reviews', () => {
  test('GET /api/reviews → 200', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/api/reviews`);
    expect(response.status()).toBe(200);
  });
});
