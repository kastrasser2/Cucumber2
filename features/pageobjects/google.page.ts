
import Page from './page.js';

 class GooglePage extends Page {
    get searchInput() {
        return $('#input');
    }

    get results() {
        return $('[h3]');
    }

    public async search(query: string) {
        await this.searchInput.setValue(query);
        await browser.keys('Enter');
    }
}

export default new GooglePage();