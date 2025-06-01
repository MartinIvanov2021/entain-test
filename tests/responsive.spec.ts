import { test, expect, Locator } from '@playwright/test';

// Test: Ensure the Live Betting page is responsive.

test.describe('Responsive Design Test', () => {
  test('Desktop viewport', async ({ page,isMobile }) => {
    await page.goto('/');

    if (isMobile){
        // Click on live betting
      const live_bet_click: Locator =  page.locator('#sports-nav vn-menu-item');
      await live_bet_click.first().click();
      const confirm_data_column_mobile = page.locator('ms-live-overview');
      await expect(confirm_data_column_mobile).toBeInViewport();
    }
    else {
      const open_livebet: Locator = page.getByRole('link', { name: 'Live Betting', exact: true });
      await open_livebet.first().click();

      const confirm_data_column = page.locator('ms-main-column');
      await expect(confirm_data_column).toBeInViewport();
    
    }
  });

 
});
