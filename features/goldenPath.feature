Feature: Golden Path

  @included
  Scenario: 1: User signs in
    Given I am at the page
    When I enter "test" 's into the input field
    And I enter "password" 's password in the login form
    Then I see the page ""

  @included
  Scenario: 2: User Sidebar: Go to Create User (success)
    Given I am user "name"
    And I am at the page
    When I use the user sidebar to go to page "adduser"
    Then I see the page ""
