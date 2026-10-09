import { test, expect } from '@playwright/test';

//Entry Check: Verify workspace loads successfully with active session
test('workspace loads successfully with active session',  async({page}) => {

    await page.goto('https://linear.app/');

    await expect(page).toHaveTitle(/Linear/);

})