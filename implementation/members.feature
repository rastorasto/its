Feature: Members management (search, detail, and edits)

  Background:
    Given an administrator is logged in
    And the administrator is on the members page

  #1
  Scenario: Filter members by surname
    When the administrator enters "Nováková" into the surname filter
    Then the member list shows "Jana Nováková"
    And the member list does not show "Tomáš Novák"

  #2
  Scenario: Filter members by team
    When the administrator filters members by team "A muži"
    Then the member list shows "Tomáš Novák"
    And the member list does not show "Jana Nováková"

  #3
  Scenario: Open member detail from the members list
    When the administrator opens the member detail for "Jana Nováková"
    Then the member detail shows the full name "Jana Nováková"
    And the member detail shows the primary email "jana.novakova@example.cz"
    And the member detail shows the state TRIAL

  #4
  Scenario: Edit a member's primary phone number
    When the administrator opens the member detail for "Tomáš Novák"
    And the administrator sets the primary phone number to "+420123456789"
    And the administrator saves the member changes
    Then the members page shows the phone number for "Tomáš Novák" as "+420123456789"
    And the members page does not show the phone number for "Tomáš Novák" as "+420602222222"

  #5
  Scenario: Change member state from TRIAL to ACTIVE
    When the administrator opens the member detail for "Jana Nováková"
    And the administrator changes the member state to ACTIVE
    And the administrator saves the member changes
    Then the member detail shows the state ACTIVE
    And the member detail does not show the state TRIAL

  #6
  Scenario: Add a new member and verify it appears in the list
    When the administrator creates a new member with first name "Jan" and last name "Botto"
    Then the members page shows "Jan Botto"
