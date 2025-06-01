import { test, expect, Locator,webkit } from '@playwright/test';

// Test: Navigate to a specific sport and ensure proper page and tab are loaded.

test('Check Sport Sorting - Tennis', async ({ page,isMobile }) => {

await page.goto('/');

   if (isMobile){
        // Click on live betting
        await page.click('text=Allow all');
        await page.click('text=A-Z Menu');
      // const open_AZsport_mobile: Locator =  page.locator('a').filter({ hasText: 'A-Z Menu' });
      // await open_AZsport_mobile.first().click();

      const open_tenis_mobile = page.getByRole('link', { name: 'sports-11 American Football' });
      await open_tenis_mobile.first().click();
      
      
      const confirm_open_tenis_mobile = page.locator('div').filter({ hasText: /^American Football$/ });
      await expect(confirm_open_tenis_mobile).toBeInViewport();
      await expect(page).toHaveURL(/american-football/);
    }
    else {
      const open_AZsport: Locator = page.locator('vn-menu-item').filter({ hasText: 'A-Z Sports' });
      await open_AZsport.first().click();

      const open_tenis: Locator = page.getByRole('link', { name: 'sports-5 Tennis theme-right' });
      await open_tenis.first().click();

      const confirm_open_tenis = page.getByText('Tennis BettingTop Tournaments');
      await expect(confirm_open_tenis).toBeInViewport();
      await expect(page).toHaveURL(/tennis/);
    }



 // await page.goto('/');
//  await page.click('text=A-Z Sports');
 // await page.click('text=Tennis');

  // URL should reflect tennis
 // await expect(page).toHaveURL(/.*sport\/tennis.*/);

  // Tab should be highlighted as active
 // const tennisTab = page.locator('[aria-label="Tennis"]');
 // await expect(tennisTab).toHaveClass(/active/);
});
