
import Page from './page.js';

 class GooglePage extends Page {
    get searchInput() {
        return $('textarea');
    }

    get staySignedOutButton() {
        return $('button');
    }

    get results() {
        return $$('h3')[0];
    }

    public async search(query: string) {
         await this.searchInput.setValue(query);
        await browser.keys('Enter');
    }
}

export default new GooglePage();