import { test, expect } from '@playwright/test';
import { selectors } from '../utils/selectors';
import { waitForOddsChange } from '../utils/helpers';

// Test: Verify that live odds update without a page refresh and display change indicators.

test('Validate Live Odds Update', async ({ page }) => {
  await page.goto('/');

  const pick = page.locator(selectors.firstPick).first();

  // Wait for odds to change using custom helper
  const { initial, updated } = await waitForOddsChange(pick, 15000);

  expect(initial).not.toEqual(updated); // Validate odds have changed

  // Verify UI change indicator (e.g., red/green arrow or flash)
  const indicator = pick.locator(selectors.oddsChangeIndicator);
  await expect(indicator).toBeVisible();
});
