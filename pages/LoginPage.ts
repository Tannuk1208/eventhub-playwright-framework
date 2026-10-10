import {Locator, Page} from '@playwright/test';
import { BasePage } from './BasePage';
export class LoginPage extends BasePage{

    private readonly emailTextBox : Locator;
    private readonly passwordTextBox : Locator;
    private readonly loginButton : Locator;


    constructor(page: Page)
    {
super(page);
        this.emailTextBox = page.getByRole('textbox', { name: 'Email' });
        this.passwordTextBox = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Sign In' });
    }

    async login(email: string, Password: string)
    {
        await this.emailTextBox.fill(email);
        await this.passwordTextBox.fill(Password);
        await this.loginButton.click();

    }
}

