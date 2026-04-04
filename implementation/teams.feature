Feature: Team management (create and delete)

  Background:
    Given an administrator is logged in
    And the administrator is on the teams page

  #7
  Scenario: Create a new team
    When the administrator sets the team name to "Team D" and note to "Seniors"
    And the administrator adds the team
    Then the teams list shows "Team D"

  #8
  Scenario: Delete a team that was created by the administrator
    Given the teams list shows "Team D"
    When the administrator deletes the team "Team D"
    And the administrator confirms the deletion
    Then the teams list does not show "Team D"
