
import Page from './page.js';

 class GooglePage extends Page {
    get searchInput() {
        return $('textarea');
    }

    get staySignedOutButton() {
        return $('button=Stay signed out');
    }

    get results() {
        return $('h3');
    }

    public async search(query: string) {
        await this.staySignedOutButton.waitForDisplayed();
        await this.staySignedOutButton.click();
        await this.searchInput.waitForClickable();
        await this.searchInput.click();
        await this.searchInput.setValue(query);
        await browser.keys('Enter');
    }
}

export default new GooglePage();