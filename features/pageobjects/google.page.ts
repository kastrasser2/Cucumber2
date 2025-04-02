
import Page from './page.js';

 class GooglePage extends Page {
    get searchInput() {
        return $('#APjFqb');
    }

    open() {
        return super.open('www.google.com')
    }

    public async search(query: string) {
        await this.searchInput.setValue(query);
        await browser.keys('Enter');
    }
}

export default new GooglePage();