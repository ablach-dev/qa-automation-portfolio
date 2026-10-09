import { test, expect } from '@playwright/test';

//Entry Check: Verify homepage loads successfully with active session
test('workspace loads successfully with active session',  async({page}) => {

    await page.goto('https://demo.realworld.show');

    await expect(page).toHaveTitle(/Conduit/);

})