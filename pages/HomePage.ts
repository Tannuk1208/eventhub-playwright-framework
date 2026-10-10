import {Page, Locator} from '@playwright/test';
import { BasePage } from './BasePage';
export class HomePage extends BasePage{

    private readonly browseEventLink: Locator;

    constructor(page:Page){
        super(page);
        this.browseEventLink = page.getByRole("link", {
            name: "Browse Events →"
        });
    }

    async clickBrowseEvents(){
        await this.browseEventLink.click();
    }

    async selectEvent(eventName:string){
        const eventCard = this.page.getByRole("article")
            .filter({
                hasText: "FestivalFeaturedDilli Diwali"
            });
            await eventCard.getByTestId("book-now-btn").click();
    }

}