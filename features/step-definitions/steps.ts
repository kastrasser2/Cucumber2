import { Given, When, Then } from '@wdio/cucumber-framework';
import {expect} from 'chai';

import GooglePage  from '../pageobjects/google.page.js';
import Page from '../pageobjects/page.js';

const page: Page = new Page(); 



Then(/^I should see a result for (.*)$/, async (result) => {
     const results = await GooglePage.results
     expect(results).to.contain(result);
});



When(/^I search for (.*)$/, async (query) => {
    await GooglePage.search(query);
});

Given('I navigate to {string}', async(s: string) => {
  await page.open(s)
  await browser.pause(2000000);
})




