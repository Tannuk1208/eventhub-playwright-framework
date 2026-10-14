import {test} from '@playwright/test';
import { environment } from '../config/environment';
import { LoginPage } from '../pages/LoginPage';
import { userData } from '../data/userData';
test.use({ storageState: { cookies: [], origins: [] } });
test("user should navigate to eventHub", async({page})=>{
    await page.goto(environment.baseUrl);
    const loginPage = new LoginPage(page);
    await loginPage.login(
        userData.validUser.email,
        userData.validUser.password
    );
})