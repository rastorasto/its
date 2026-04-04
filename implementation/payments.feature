Feature: Expected payments and matching manual transactions

  Background:
    Given an administrator is logged in

  #19
  Scenario: Create an expected payment for a selected member
    When the administrator opens the members page
    And the administrator selects the member "Jana Nováková"
    And the administrator adds an expected payment with name "Obcerstveni", amount "1500", and due date "07/05/2026"
    Then the payments page shows an unpaid expected payment for "Jana Nováková" with amount "1500"

  #20
  Scenario: Create a manual transaction (unmatched)
    When the administrator opens the payments operations page
    And the administrator creates a manual transaction with amount "1000", date "06/05/2026", and note "Partial payment"
    Then the manual transaction is listed as unmatched with note "Partial payment"

  #21
  Scenario: Match a manual transaction to an expected payment
    Given an expected payment exists for "Jana Nováková" with amount "1500"
    And an unmatched manual transaction exists with note "Partial payment"
    When the administrator opens the payments operations page
    And the administrator matches the manual transaction to the expected payment from "Jana Nováková" for "Obcerstveni"
    Then the allocation is listed as matched with note "Partial payment"
    And the manual transaction is not listed as unmatched with note "Partial payment"

  #22
  Scenario: Payments overview shows partially paid with correct open amount
    Given an expected payment exists for "Jana Nováková" with name "Obcerstveni"
    And a matched allocation exists for "Jana Nováková" with amount "1000"
    When the administrator opens the payments page
    Then the payments overview shows settlement status "Částečně uhrazeno" for "Jana Nováková" and "Obcerstveni"
    And the payments overview shows open amount "500.00 Kč" for "Jana Nováková" and "Obcerstveni"
