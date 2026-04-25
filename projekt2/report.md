Tests for champ
# ITS Project 2
GUI tests written in Cypress for CHAMP
- **Autor** Rastislav Uhliar (xuhliar00)
- **Datum** 25.04.2026


## 2. Stručný popis úprav testů

Testy som upravil tak, že namiesto fixných emailov ako napríklad `adam@seznam.cz` používam emaily, ktoré sa menia podľa času: `const email = "user.${Date.now()}@example.cz"`. Je to tak preto, aby mohli byť testy spustené viackrát a jednotlivé testy boli od seba izolované.

Niektoré príkazy som zlúčil do funkcií `cy.loginAsAdmin()`, `cy.loginUser()`, `cy.createMember()`, `cy.createTrainer()` a `cy.createCommittee()`. Spravil som to preto, lebo boli časťou `Background` alebo `Given` a opakovali sa vo viacerých testoch.

## 3. Mapovací tabulka

| # | Scenario file | Line | Cypress file | Line |
|---|---------------|------|--------------|------|
| 1 | members.feature | 8 | members_cy.js | 2 |
| 2 | members.feature | 14 | members_cy.js | 12 |
| 3 | members.feature | 20 | members_cy.js | 22 |
| 4 | members.feature | 27 | members_cy.js | 33 |
| 5 | members.feature | 35 | members_cy.js | 55 |
| 6 | members.feature | 43 | members_cy.js | 70 |
| 7 | teams.feature | 8 | teams_cy.js | 2 |
| 8 | teams.feature | 14 | teams_cy.js | 13 |
| 9 | users.feature | 4 | users_cy.js | 2 |
| 10 | users.feature | 11 | users_cy.js | 12 |
| 11 | users.feature | 20 | users_cy.js | 26 |
| 12 | users.feature | 27 | users_cy.js | 43 |
| 13 | permissions.feature | 4 | permissions_cy.js | 2 |
| 14 | permissions.feature | 10 | permissions_cy.js | 8 |
| 15 | permissions.feature | 16 | permissions_cy.js | 20 |
| 16 | permissions.feature | 22 | permissions_cy.js | 28 |
| 17 | permissions.feature | 30 | permissions_cy.js | 48 |
| 18 | permissions.feature | 38 | permissions_cy.js | 65 |
| 19 | payments.feature | 7 | payments_cy.js | 2 |
| 20 | payments.feature | 14 | payments_cy.js | 18 |
| 21 | payments.feature | 20 | payments_cy.js | 31 |
| 22 | payments.feature | 29 | payments_cy.js | 57 |