Feature: Users management (accounts, roles, and member linking)

  #9
  Scenario: Create a new user account
    Given an administrator is logged in
    And the administrator is on the users page
    When the administrator creates a new user with email "adam@seznam.cz", password "heslo" and role "PLAYER"
    Then the users list shows the user "adam@seznam.cz"

  #10
  Scenario: Assign an additional role to an existing user
    Given an administrator is logged in
    And the administrator is on the users page
    When the administrator opens editing for the user "adam@seznam.cz"
    And the administrator assigns the role TRAINER to the user "adam@seznam.cz"
    And the administrator confirms the changes
    Then the users list shows that "adam@seznam.cz" has the roles PLAYER and TRAINER
  
  #11
  Scenario: Link member to a user
    Given an administrator is logged in
    And the administrator is on the users page
    When the administrator links the user "adam@seznam.cz" to the member "Jana Nováková" as "GUARDIAN"
    Then the user "adam@seznam.cz" shows a linked member "Jana Nováková"

  #12
  Scenario: Cancel a member link
    Given an administrator is logged in
    And the administrator is on the users page
    When the administrator removes the member link for "Jana Nováková" for user "adam@seznam.cz"
    Then the user "adam@seznam.cz" does not show a linked member "Jana Nováková"
