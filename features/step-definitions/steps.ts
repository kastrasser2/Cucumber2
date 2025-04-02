import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';
import GooglePage  from '../pageobjects/google.page.js';
import Page from '../pageobjects/page.js';

const page: Page = new Page(); 

Given(/^I navigate to (\w+) $/, async (url) => {
    await page.open(url)
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining(message));
});

Then(/^I should see the (.*)$/, async (element) => {
    await expect(GooglePage.searchInput).toBeExisting();
    await expect(GooglePage.searchInput).toHaveText(expect.stringContaining(element));
});

Then(/^I should see the (.*)$/, async (element) => {
    await expect(GooglePage.searchInput).toBeExisting();
    await expect(GooglePage.searchInput).toHaveText(expect.stringContaining(element));
});
When(/^I search for (.*)$/, async (query) => {
    await GooglePage.search(query);
});

Given('I navigate to {string}', async(s: string) => {
  await page.open(s)
})



