import { test, expect } from "../fixtures/customFixture";
import { invalidEmails, invalidPhoneNumbers } from "../data/bookingTestData";
import { environment } from "../config/environment";

invalidEmails.forEach((email) => {

    test(`Invalid Email Validation - ${email}`,   async ({
        page,
        bookingPage,
        homePage
    }) => {

        await page.goto(environment.baseUrl);

        await homePage.clickBrowseEvents();

        await homePage.selectEvent(
            "FestivalFeaturedDilli Diwali"
        );

        await bookingPage.fillUser1Details(
            "Tannu Kumari",
            email,
            "9835549520"
        );

        await bookingPage.confirmBooking();

        await expect(
            page.getByText("Enter a valid email")
        ).toBeVisible();

    });

});


invalidPhoneNumbers.forEach((phone) => {

    test(`Invalid Phone Validation - ${phone}`, async ({
        page,
        bookingPage,
        homePage
    }) => {

        await page.goto(environment.baseUrl);

        await homePage.clickBrowseEvents();

        await homePage.selectEvent(
            "FestivalFeaturedDilli Diwali"
        );

        await bookingPage.fillUser1Details(
            "Tannu Kumari",
            "test@gmail.com",
            phone
        );

        await bookingPage.confirmBooking();

        await expect(
            page.getByText("Enter a valid 10-digit phone")
        ).toBeVisible();

    });

});