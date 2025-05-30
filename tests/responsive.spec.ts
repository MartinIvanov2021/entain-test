import { test, expect } from '@playwright/test';

// Test: Ensure the Live Betting page is responsive.

test.describe('Responsive Design Test', () => {
  test('Desktop viewport', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#header')).toBeVisible();
  });

  test.use({ viewport: { width: 375, height: 812 } }); // Mobile

  test('Mobile viewport', async ({ page }) => {
    await page.goto('/');
    const mobileHeader = page.locator('[data-testid="mobile-header"]');
    await expect(mobileHeader).toBeVisible();
  });
});
