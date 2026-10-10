import { test as setup } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { userData } from '../data/userData';
import { environment } from '../config/environment';

setup('authenticate', async ({ page }) => {

    await page.goto(environment.baseUrl);

    const loginPage = new LoginPage(page);

    await loginPage.login(
        userData.validUser.email,
        userData.validUser.password
    );

    await page.getByRole('link', {
        name: 'Browse Events →'
    }).waitFor();

    await page.context().storageState({
        path: '.auth/user.json'
    });

});