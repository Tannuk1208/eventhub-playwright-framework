import {test as base, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { BookingPage } from '../pages/BookingPage'
import { HomePage } from '../pages/HomePage';

type MyFixtures = {
    loginPage: LoginPage
    bookingPage : BookingPage
    homePage : HomePage
};
export const test = base.extend<MyFixtures>({
    loginPage : async({page}, use)=>{
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    bookingPage : async({page}, use)=>{
        const bookingPage = new BookingPage(page);
        await use(bookingPage);
    },
    homePage : async({page}, use)=>{
        const homePage = new HomePage(page);
        await use(homePage);
    }
});
export {expect};