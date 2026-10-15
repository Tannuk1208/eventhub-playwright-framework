import { expect, test as setup } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { userData } from '../data/userData';
import { environment } from '../config/environment';

setup('authenticate', async ({ page }) => {

    
    const email = process.env.EVENTHUB_EMAIL;
    const password = process.env.EVENTHUB_PASSWORD

    if(!email|| !password)
    {
        throw new Error(
            'EVENTHUB_EMAL or EVENTHUB_PASSWORD environment variable is missing'
        );
    }
    await page.goto(environment.baseUrl);
    const loginPage = new LoginPage(page);

    await loginPage.login(
        // userData.validUser.email,
        // userData.validUser.password
        email,
        password
    );

    await expect(page.getByRole('link', {
        name: 'Browse Events →'
    })).toBeVisible();

    await page.context().storageState({
        path: '.auth/user.json'
    });

});