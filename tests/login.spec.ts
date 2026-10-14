import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { environment } from '../config/environment';
import { userData } from '../data/userData';
test.use({ storageState: { cookies: [], origins: [] } });
test('User Login', async ({ page }) => {

    await page.goto(environment.baseUrl);

    console.log("Current URL:", page.url());

    //await page.pause();

    const loginPage = new LoginPage(page);

    await loginPage.login(
        userData.validUser.email,
        userData.validUser.password
    );
});