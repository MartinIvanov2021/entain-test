import { Locator } from '@playwright/test';

/**
 * Waits until the odds of a specific locator (e.g., live pick) change.
 * Returns both initial and updated odds text for validation.
 */
export async function waitForOddsChange(pick: Locator, timeout = 15000) {
  const initial = await pick.innerText();
  let updated = initial;
  const start = Date.now();

  while (updated === initial && Date.now() - start < timeout) {
    await new Promise(r => setTimeout(r, 1000));
    updated = await pick.innerText();
  }

  return { initial, updated };
}
