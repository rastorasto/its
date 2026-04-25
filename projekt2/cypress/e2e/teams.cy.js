// 7
describe("Create a new team", () => {
  it("creates a new team and it's visible in the list", () => {
    const teamName = 'Testovací tým' + Date.now()

    cy.loginAsAdmin()
    cy.visit('http://localhost:8000/teams')
    
    cy.get('#new-team-name').type(teamName)
    cy.get('#new-team-note').type('popis tymu testovaci tym')

    cy.contains("Přidat tým").click()

    cy.contains('tr', teamName).should('be.visible')
  })
})

// 8
describe('Delete a team that was created by the administrator', () => {
  it('deletes the team and it no longer appears in the list', () => {
    const teamName = 'Testovací tým' + Date.now()
    
    cy.loginAsAdmin()
    cy.visit('http://localhost:8000/teams')
    cy.get('#new-team-name').type(teamName)
    cy.get('#new-team-note').type('popis tymu ktory bude vymazany')

    cy.contains("Přidat tým").click()

    cy.contains('tr', teamName).should('be.visible')

    cy.contains('tr', teamName).find('button').contains("Smazat").click()

    cy.contains('tr', teamName).should('not.exist')
  })
})
