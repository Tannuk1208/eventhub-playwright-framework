import { environment } from "../config/environment";
import { userData } from "../data/userData";
import { BookingPage } from "../pages/BookingPage";
//import { expect, test } from "@playwright/test";
import { test, expect } from "../fixtures/customFixture"

test.describe("Event Booking Tests", () => {

    //let bookingPage: BookingPage;

    test.beforeEach(async ({ page,homePage }) => {

        await page.goto(environment.baseUrl);
        await homePage.clickBrowseEvents();
        await homePage.selectEvent( "FestivalFeaturedDilli Diwali");

        //bookingPage = new BookingPage(page);

        // await page.getByRole("link", {
        //     name: "Browse Events →"
        // }).click();

        // const eventCard = page
        //     .getByRole("article")
        //     .filter({
        //         hasText: "FestivalFeaturedDilli Diwali"
        //     });

        //await eventCard.getByTestId("book-now-btn").click();
    });

    test("should book one ticket with valid customer details",
        async ({ page,bookingPage }) => {

            await bookingPage.fillUser1Details(
                userData.valid.userName,
                userData.valid.userEmail,
                userData.valid.userNumber
            );

            await bookingPage.confirmBooking();

            await expect(
                page.getByRole("heading", {
                    name: "Booking Confirmed! 🎉"
                })
            ).toBeVisible();
        });

    test("should increase ticket count", async ({ page,bookingPage }) => {

        await bookingPage.increaseTickets(3);

        await expect(
            page.getByText(/4 tickets/i)
        ).toBeVisible();
    });

    test("should decrease ticket count", async ({ page,bookingPage }) => {

        await bookingPage.increaseTickets(3);

        await bookingPage.decreaseTickets(2);

        await expect(
            page.locator(".ticket-count")
        ).toHaveText("2");
    });

    test("should not exceed max ticket limit", async ({ page,bookingPage }) => {

        await bookingPage.increaseTickets(9);

        await expect(
            page.getByRole("button", {
                name: "+",
                exact: true
            })
        ).toBeDisabled();
    });

    test("should not reduce below 1 ticket", async ({page,bookingPage}) => {

        await expect(
            bookingPage.getDecreaseButton()
        ).toBeDisabled();
    });

});