import { test, expect } from '@playwright/test';
import { selectors } from '../utils/selectors';

/**
 * Test: Add a live pick to the betslip and validate it appears correctly.
 */
test('Add pick to Betslip', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('domcontentloaded');

  const firstPick = page.locator(selectors.firstPick);
  await firstPick.first().click(); // Add first available pick

  // Verify pick appears in the betslip
  const betslipItem = page.locator(selectors.betslipItem);
  await expect(betslipItem).toBeVisible();

  // Confirm pick is highlighted (active class)
  await expect(firstPick.first()).toHaveClass(/selected/);
});
