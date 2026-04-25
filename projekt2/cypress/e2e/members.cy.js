// 1
describe('Filter members by surname', () => {
  it('filters members by surname', () => {
    cy.loginAsAdmin()
    cy.visit('http://localhost:8000/members')

    cy.get('input[aria-label="Příjmení"]').type('Nováková')

    cy.contains('tr', 'Jana').should('contain', 'Nováková')
    cy.contains('tr', 'Tomáš').should('not.exist')
  })
})

// 2
describe('Filter members by team', () => {
  it('filters members by team', () => {
    cy.loginAsAdmin()
    cy.visit('http://localhost:8000/members')

    // cy.get('button[aria-label="Zobrazit sloupec Týmy"]').click()

    cy.get('input[aria-label="Týmy"]').type('A muži')

    cy.contains('tr', 'Tomáš').should('contain', 'Novák')
    cy.contains('tr', 'Jana').should('not.exist')
  })
})

// 3
describe('Open member detail from the members list', () => {
  it('opens member detail page', () => {
    cy.loginAsAdmin()
    cy.visit('http://localhost:8000/members')

    cy.get(':nth-child(2) > :nth-child(3) > .d-block').click()

    cy.contains('h1', 'Jana Nováková').should('be.visible')

    cy.get('.row > :nth-child(3) > .form-control').should('have.value', 'jana.novakova@example.cz')
    
    cy.contains("Na zkoušku").should('be.visible')
  })
})

// 4
describe("Edit member's primary phone number", () => {
  it("edits member's primary phone number", () => {
    cy.loginAsAdmin()
    cy.visit('http://localhost:8000/members')
    
    cy.contains('tr', 'Tomáš').find('a').first().click()

    cy.get('.row > :nth-child(4) > .form-control').clear().type("+420123456789")

    cy.contains('Uložit člena').click()

    cy.visit('http://localhost:8000/members')

    cy.get('.champ-collapsible-column--phone > .champ-collapsible-header > .btn').click()

    cy.contains('a', 'Tomáš').closest('tr').find('td.champ-collapsible-column--phone').should('have.text', '+420123456789');

    cy.contains('a', 'Tomáš').closest('tr').find('td.champ-collapsible-column--phone').should('not.have.text', '+420602222222');

  })
})


// 5
describe('Change member state from TRIAL to ACTIVE', () => {
  it('changes member state from TRIAL to ACTIVE', () => {
    cy.loginAsAdmin()
    cy.visit('http://localhost:8000/members')
    
    cy.contains('tr', 'Jana').find('a').first().click()

    cy.get(':nth-child(8) > .form-select').select('ACTIVE')

    cy.contains('Uložit člena').click()

    cy.get(':nth-child(8) > .form-select').should('have.value', 'ACTIVE')
    cy.get(':nth-child(8) > .form-select').should('not.have.value', 'TRIAL')
  })
})

// 6
describe('Add a new member and verify it appears in the list', () => {
  const memberName = `Meno ${Date.now()}`;
  const memberSurname = `Prijmeni ${Date.now()}`;

  before(() => {
    cy.loginAsAdmin()
    cy.visit('http://localhost:8000/members')
    cy.contains("Přidat nového člena").click()
    cy.get('#new-member-first-name').type(memberName)
    cy.get('#new-member-last-name').type(memberSurname)
    cy.contains("Přidat člena").click()
  })

  it('new member appears in the list', () => {
    cy.loginAsAdmin()
    cy.visit('http://localhost:8000/members')

    cy.contains('tr', memberName).should('be.visible')
    cy.contains('tr', memberSurname).should('be.visible')
  })
})