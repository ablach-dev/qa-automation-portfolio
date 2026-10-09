import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://linear.app/');

  await expect(page).toHaveTitle(/Linear/);
});


