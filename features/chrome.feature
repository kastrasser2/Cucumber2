Feature: Google

    Scenario: Google Search
        Given I navigate to "https://www.google.com"
        When I search for "WebdriverIO"
        Then I should see a result for "WebdriverIO"

    

   