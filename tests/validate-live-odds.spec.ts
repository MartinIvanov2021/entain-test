import { test, expect, Locator } from '@playwright/test';
import { selectors } from '../utils/selectors';
import { waitForOddsChange } from '../utils/helpers';

// Test: Verify that live odds update without a page refresh and display change indicators.

test('Validate Live Odds Update', async ({ page, }) => {



  await page.goto('/');

       const test: Locator = page.getByRole('link', { name: 'Live Betting', exact: true });
       await test.first().click();

      const open_tenis: Locator = page.getByRole('tab', { name: '56' }).locator('a');
      await open_tenis.first().click();

      const add_bet_slip = page.locator('.option-indicator').first();
      const odds_value = await add_bet_slip.allInnerTexts();
      
      await expect(add_bet_slip).not.toHaveText(odds_value,{timeout: 10000});
    


});
