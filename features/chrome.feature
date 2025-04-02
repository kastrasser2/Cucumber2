Feature: Google

    Scenario: Google Search
        Given I navigate to "https://www.google.com"
        When I search for "Cypress"
        Then I should see "Cypress.io: JavaScript End to End Testing Framework"


   