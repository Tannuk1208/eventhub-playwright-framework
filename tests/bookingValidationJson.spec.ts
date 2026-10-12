import bookingData from "../data/bookingData.json";
import { test, expect } from "../fixtures/customFixture";
import { environment } from "../config/environment";

bookingData.invalidEmails.forEach((email) => {

    test(`JSON Invalid Email - ${email}`, async ({
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
            "9876543210"
        );

        await bookingPage.confirmBooking();

        await expect(
            page.getByText("Enter a valid email")
        ).toBeVisible();

    });

});


bookingData.invalidPhones.forEach((phone) => {

    test(`JSON Invalid Phone - ${phone}`, async ({
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