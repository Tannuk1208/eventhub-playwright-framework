import { Locator,Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class BookingPage extends BasePage{
    private readonly userName : Locator;
    private readonly userEmail : Locator;
    private readonly userNumber : Locator;

    private readonly increaseTicketButton : Locator;
    private readonly decreaseTicketButton : Locator;
    private readonly confirmBookingButton : Locator;

    private readonly nameError : Locator;
    private readonly emailError : Locator;
    private readonly phoneError : Locator;

    constructor (page:Page){
        super(page);
        this.userName = page.getByRole('textbox', { name: 'Full Name*' });
        this.userEmail = page.getByTestId('customer-email');
        this.userNumber = page.getByRole('textbox', { name: 'Phone Number*' });

        this.increaseTicketButton = page.getByRole('button', { name: '+' , exact : true });
        this.decreaseTicketButton = page.getByRole('button', { name: '−' , exact : true });
        this.confirmBookingButton = page.getByRole('button', { name: 'Confirm Booking' })

        this.nameError = page.getByText('Name must be at least 2 chars');
        this.emailError = page.getByText('Enter a valid email');
        this.phoneError = page.getByText('Enter a valid 10-digit phone');
    }

        async fillUser1Details(userName : string, userEmail : string, userNumber : string) : Promise<void>
        {
         await this.userName.fill(userName);
         await this.userEmail.fill(userEmail);
         await this.userNumber.fill(userNumber);
        }

        async increaseTicket() : Promise<void>{
            await this.increaseTicketButton.click();
        }

        async decreaseTicket() : Promise<void>{
            await this.decreaseTicketButton.click();
        }

        async increaseTickets(numberOfTimes : number) : Promise<void>{
            for(let i=0;i<numberOfTimes;i++){
                await this.increaseTicketButton.click();
            }

        }

        async decreaseTickets(numberOfTimes : number) : Promise <void>{
            for(let i=0;i<numberOfTimes;i++)
            {
                await this.decreaseTicketButton.click();
            }
        }

        async confirmBooking() : Promise <void> {
            await this.confirmBookingButton.click();
        }

        getNameError(): Locator {
        return this.nameError;
    }

    getEmailError(): Locator {
        return this.emailError;
    }

    getPhoneError(): Locator {
        return this.phoneError;
    }

    getIncreaseTicketButton(): Locator {
        return this.increaseTicketButton;
    }

    getDecreaseTicketButton(): Locator {
        return this.decreaseTicketButton;
    }
    public getDecreaseButton() {
    return this.decreaseTicketButton;
}
    

}