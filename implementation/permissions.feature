Feature: Permissions for user roles

  #13
  Scenario: Unauthenticated user is redirected to login
    Given the user is not authenticated
    When the user opens the members page
    Then the user is redirected to the login page

  #14
  Scenario: Member user cannot access administrative pages
    Given a member user is logged in
    When the member user opens the payments page
    Then the member user is redirected to the my account page
  
  #15
  Scenario: Administrator can access payments operations
    Given an administrator is logged in
    When the administrator opens the payments operations page
    Then the payments operations page is displayed

  #16
  Scenario: Trainer can access members and edit member notes
    Given a trainer user is logged in
    When the trainer user opens the members page
    And the trainer user opens the member detail for "Jana Nováková"
    Then the member detail is displayed
    And the trainer user can edit member notes

  #17
  Scenario: Trainer can view teams but cannot manage teams
    Given a trainer user is logged in
    When the trainer user opens the teams page
    Then the teams page is displayed
    And the trainer user cannot create a new team
    And the trainer user cannot delete a team

  #18
  Scenario: Committee member can create a new team
    Given a committee user is logged in
    When the committee user opens the teams page
    And the committee user creates a team with name "Committee Team" and note "Created by committee"
    Then the teams list shows "Committee Team"
