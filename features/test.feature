#features/test.feature
Feature: Running Cucumber with Protractor
    I should be able to use Cucumber
    In order to run my E2E tests

    Scenario: Protractor and Cucumber Test
        Given I go to "https://www.metrocuadrado.com/"
        #When I add "Be Awesome" in the task field
        When I click the calcutor button
        Then I should see my new task in the list