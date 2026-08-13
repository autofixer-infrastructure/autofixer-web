import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: false,
  workers: 1,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: 'html',
  use: {
    baseURL: process.env.BASE_URL || 'https://autofixer.cl',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      testMatch: /^(?!.*rate-limit).*\.spec\.ts$/,
    },
    {
      name: 'rate-limit-isolated',
      use: { ...devices['Desktop Chrome'] },
      testMatch: /rate-limit\.spec\.ts$/,
      workers: 1,
    },
  ],
});
