# ITS Projekt 1

- **Autor:** Rastislav Uhliar (xuhliar00)
- **Datum:** 2026-04-02

## Matice pokrytí artefaktů

Čísla testů jednoznačně identifikují scénář v souborech `.feature`.

| Page / Artifact | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Login page |  |  |  |  |  |  |  |  |  |  |  |  | x |  |  |  |  |  |  |  |  |  |
| My account page |  |  |  |  |  |  |  |  |  |  |  |  |  | x |  |  |  |  |  |  |  |  |
| Members page | x | x | x | x | x | x |  |  |  |  |  |  | x |  |  | x |  |  | x |  |  |  |
| Member search / filter controls | x | x |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Member detail page |  |  | x | x | x |  |  |  |  |  |  |  |  |  |  | x |  |  |  |  |  |  |
| Member edit controls (phone/state/notes) |  |  |  | x | x |  |  |  |  |  |  |  |  |  |  | x |  |  |  |  |  |  |
| Member create controls |  |  |  |  |  | x |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Teams page |  |  |  |  |  |  | x | x |  |  |  |  |  |  |  |  | x | x |  |  |  |  |
| Users page |  |  |  |  |  |  |  |  | x | x | x | x |  |  |  |  |  |  |  |  |  |  |
| User create form |  |  |  |  |  |  |  |  | x |  |  |  |  |  |  |  |  |  |  |  |  |  |
| User role edit controls |  |  |  |  |  |  |  |  |  | x |  |  |  |  |  |  |  |  |  |  |  |  |
| User-member linking controls |  |  |  |  |  |  |  |  |  |  | x | x |  |  |  |  |  |  |  |  |  |  |
| Payments overview page |  |  |  |  |  |  |  |  |  |  |  |  |  | x |  |  |  |  | x |  |  | x |
| Payments operations page |  |  |  |  |  |  |  |  |  |  |  |  |  |  | x |  |  |  |  | x | x |  |
| Expected payment creation controls |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | x |  |  |  |
| Manual transaction creation controls |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | x |  |  |
| Payment matching controls |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | x |  |

## Matice pokrytí aktivit

| Activity | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Search members by surname | x |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Filter members by team |  | x |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Open member detail |  |  | x |  |  |  |  |  |  |  |  |  |  |  |  | x |  |  |  |  |  |  |
| Verify member detail data |  |  | x |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Edit member phone number |  |  |  | x |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Change member state |  |  |  |  | x |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Create a new member |  |  |  |  |  | x |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Create a new team |  |  |  |  |  |  | x |  |  |  |  |  |  |  |  |  |  | x |  |  |  |  |
| Delete a team |  |  |  |  |  |  |  | x |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Create a new user |  |  |  |  |  |  |  |  | x |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Assign an additional role to a user |  |  |  |  |  |  |  |  |  | x |  |  |  |  |  |  |  |  |  |  |  |  |
| Link a user to a member |  |  |  |  |  |  |  |  |  |  | x |  |  |  |  |  |  |  |  |  |  |  |
| Remove a member link from a user |  |  |  |  |  |  |  |  |  |  |  | x |  |  |  |  |  |  |  |  |  |  |
| Redirect unauthenticated user to login |  |  |  |  |  |  |  |  |  |  |  |  | x |  |  |  |  |  |  |  |  |  |
| Restrict MEMBER from payments page |  |  |  |  |  |  |  |  |  |  |  |  |  | x |  |  |  |  |  |  |  |  |
| Allow ADMIN to access payment operations |  |  |  |  |  |  |  |  |  |  |  |  |  |  | x |  |  |  |  |  |  |  |
| Trainer edits member notes |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | x |  |  |  |  |  |  |
| Restrict trainer from managing teams |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | x |  |  |  |  |  |
| Committee creates a new team |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | x |  |  |  |  |
| Create an expected payment |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | x |  |  |  |
| Create a manual transaction |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | x |  |  |
| Match a manual transaction to an expected payment |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | x |  |
| Verify partially paid and open amount |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | x |

## Matice Feature-Test

| Feature file | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| members.feature | x | x | x | x | x | x |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| teams.feature |  |  |  |  |  |  | x | x |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| users.feature |  |  |  |  |  |  |  |  | x | x | x | x |  |  |  |  |  |  |  |  |  |  |
| permissions.feature |  |  |  |  |  |  |  |  |  |  |  |  | x | x | x | x | x | x |  |  |  |  |
| payments.feature |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | x | x | x | x |
