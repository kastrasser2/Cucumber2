Feature: Google

    #Scenario: Google Search
        #Given I navigate to "https://www.google.com"
        #When I search for "WebdriverIO"
        #note: this does not work because google detects the browser as a bot
        #Then I should see a result for WebdriverIO

    Scenario: Navigate to Google
        Given I navigate to "https://www.google.com"
        Then I should see the Google page
    

    

   