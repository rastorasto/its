// 13
describe('Unauthenticated user is redirected to login', () => {
  it('redirects to login page when accessing members page', () => {
    cy.visit('http://localhost:8000/members')
    cy.url().should('include', '/login')
  })
})

// 14
describe('Member user cannot access administrative pages', () => {
  const memberEmail = `member.${Date.now()}@example.cz`;
  const memberPassword = 'password'

  before(() => {
    cy.createMember(memberEmail, memberPassword)
  })

  it('redirects to my acccount page when accessing payments page', () => {
    cy.loginUser(memberEmail, memberPassword)
    cy.visit('http://localhost:8000/payments')
    cy.url().should('include', '/my-account')
  })
})

// 15
describe('Administrator can access payments operations', () => {
  it("when admin opens payments page, it is displayed", () => {
    cy.loginAsAdmin()   
    cy.visit('http://localhost:8000/payments')
    cy.url().should('include', '/payments')
  })
})

// 16
describe('Trainer can access members and edit member notes', () => {
  const trainerEmail = `trainer.${Date.now()}@example.cz`;
  const trainerPassword = 'password'

  before(() => {
    cy.createTrainer(trainerEmail, trainerPassword)
  })

  it('trainer accessing members page and editing member note', () => {
    cy.loginUser(trainerEmail, trainerPassword)
    cy.visit('http://localhost:8000/members')
    cy.contains('Nováková').click()

    cy.get('.d-grid > .form-control').clear().type('test poznamka')

    cy.contains('Uložit poznámku').click()

    cy.visit('http://localhost:8000/members')
    
    cy.get('.champ-note-column > .champ-collapsible-header > .btn').click()

    cy.contains('a', 'Nováková').closest('tr').find('td.champ-note-cell').should('have.attr', 'title', 'test poznamka');
  })
})

// 17
describe('Trainer can view team but cannot manage teams', () => {
  const trainerEmail = `trainer111.${Date.now()}@example.cz`;
  const trainerPassword = 'password'

  before(() => {
    cy.createTrainer(trainerEmail, trainerPassword)
  })

  it('trainer cannot manage teams', () => {
    cy.loginUser(trainerEmail, trainerPassword)
    cy.visit('http://localhost:8000/teams')
    cy.contains('A muži').should('be.visible')
    cy.contains('Jen pro čtení').should('be.visible')

    cy.contains('Přidat tým').should('not.exist')
  })
})

// 18
describe('Committee member can create a new team', () => {
  const committeeEmail = `committee.${Date.now()}@example.cz`;
  const committeePassword = 'password'
  const teamName = 'Testovací tým' + Date.now()

  before(() => {
    cy.createCommittee(committeeEmail, committeePassword)
  })

  it('committee member can create a new team', () => {
    cy.loginUser(committeeEmail, committeePassword)
    cy.visit('http://localhost:8000/teams')
    
    cy.get('#new-team-name').type(teamName)
    cy.get('#new-team-note').type('popis tymu')

    cy.contains('Přidat tým').click()

    cy.get('div.champ-panel').contains(teamName).should('be.visible')
  })
})