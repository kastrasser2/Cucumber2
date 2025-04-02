import { Given, When, Then } from '@wdio/cucumber-framework';
import {expect} from 'chai';

import GooglePage  from '../pageobjects/google.page.js';
import Page from '../pageobjects/page.js';


const page: Page = new Page(); 



Then(/^I should see a result for (.*)$/, async(result) => {
     const results = GooglePage.results;
     const text = await results.getText();
     await expect(text).to.contain(result);
});

Then(/^I should see the Google page$/, async() => {
    const altAttribute = await GooglePage.header.getAttribute('alt');
    await expect(altAttribute).to.equal('Google');
})

When(/^I search for (.*)$/, async (query) => {
    await GooglePage.search(query);
});

Given('I navigate to {s}', async(s: string) => {
  await page.open(s)
}); 




