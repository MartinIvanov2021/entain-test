import { test, expect, Locator } from '@playwright/test';
import { selectors } from '../utils/selectors';

// Test: Add a live pick to the betslip and validate it appears correctly.

test('Add pick to Betslip', async ({ page, isMobile }) => {
  await page.goto('/');
  await page.waitForLoadState('domcontentloaded');

  // Go to live betting 

  if (isMobile){
    // Click on live betting
    const live_bet_click: Locator =  page.locator('#sports-nav vn-menu-item');
    await live_bet_click.first().click();

    // add bet slip 
    const add_bet_slip = page.locator('.option-indicator');
    await add_bet_slip.first().click();

    // verify pick appears in the betslip 
    const betslip_bar = page.locator('bs-betslip-bar');
    await expect(betslip_bar).toBeVisible();

  }else {
    const test: Locator = page.getByRole('link', { name: 'Live Betting', exact: true });
    await test.first().click(); // Add first available pick
  
    // verify if the bet is added in betslip
  
    const add_bet_slip = page.locator('.option-indicator');
    await add_bet_slip.first().click();
   
  
    // Verify pick appears in the betslip
    const betslipItem = page.locator('bs-digital-single-bet-pick');
    await expect(betslipItem).toBeVisible();
  }


});
