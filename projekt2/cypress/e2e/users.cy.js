// 9
describe('Create a new user account', () => {
  const email = `user.${Date.now()}@example.cz`;
  const password = 'password'

  before(() => {
    cy.createPlayer(email, password)
  })

  it('creates a new user account and it is visible in the list', () => {
    cy.loginAsAdmin()
    cy.visit('http://localhost:8000/users')

    cy.contains('tr', email).should('be.visible')
  })
})

// 10
describe('Assign an additional role to an existing user', () => {
  const email = `user11.${Date.now()}@example.cz`;
  const password = 'password'

  before(() => {
    cy.createPlayer(email, password)
  })

  it('assigns an additional role to an existing user and it is visible in the list', () => {
    cy.loginAsAdmin()
    cy.visit('http://localhost:8000/users')

    cy.contains('tr', email).contains('Upravit').click({force: true})

    cy.get('input[aria-label$="-TRAINER"]').check()

    cy.get('[value="' + email + '"]').closest('tr').contains('Potvrdit').click()

    cy.contains('tr', email).should('contain', 'PLAYER').and('contain', 'TRAINER')
  })
})

// 11
describe('Link member to a user', () => {
  const email = `user12.${Date.now()}@example.cz`;
  const password = 'password'

  before(() => {
    cy.createPlayer(email, password)
  })

  it('links a member to a user and the link is visible in the members list', () => {
    cy.loginAsAdmin()
    cy.visit('http://localhost:8000/users')

    cy.contains('tr', email).find('select[aria-label^="link-member-"]').select('Jana Nováková (1)')

     cy.contains('tr', email).contains('button', 'Propojit člena').click()

    cy.contains('tr', email).should('contain', 'Jana Nováková')
    // cy.contains('tr', email).should('contain', 'jana.novakova@example.cz')
  })
})

// 12
describe('Cancel a member link', () => {
  const email = `user13.${Date.now()}@example.cz`;
  const password = 'password'
  
  before(() => {
    cy.createPlayer(email, password)
  })

  it('cancels a member link and the link is no longer visible', () => {
    cy.loginAsAdmin()
    cy.visit('http://localhost:8000/users')
    cy.contains('tr', email).find('select[aria-label^="link-member-"]').select('Jana Nováková (1)')
    cy.contains('tr', email).contains('button', 'Propojit člena').click()
    cy.contains('tr', email).should('contain', 'Jana Nováková')

    cy.contains('tr', email).contains('button', 'Zrušit propojení').click()
    
    cy.contains('tr', email).should('not.contain', 'jana.novakova@example.cz')
  })
})
