import { test, expect } from '@playwright/test';

// Test: Navigate to a specific sport and ensure proper page and tab are loaded.

test('Check Sport Sorting - Tennis', async ({ page }) => {
  await page.goto('/');
  await page.click('text=A-Z Sports');
  await page.click('text=Tennis');

  // URL should reflect tennis
  await expect(page).toHaveURL(/.*sport\/tennis.*/);

  // Tab should be highlighted as active
  const tennisTab = page.locator('[aria-label="Tennis"]');
  await expect(tennisTab).toHaveClass(/active/);
});
