// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginAsAdmin', () => {
    cy.clearCookies();
    cy.clearLocalStorage();

    cy.visit('http://localhost:8000/')
    cy.get('#login-email').type('admin@example.cz')
    cy.get('#login-password').type('admin')
    cy.contains('Přihlásit se').click({timeout: 100})
})

Cypress.Commands.add('loginUser', (email, password) => {
    cy.clearCookies();
    cy.clearLocalStorage();

    cy.visit('http://localhost:8000/')
    cy.get('#login-email').type(email)
    cy.get('#login-password').type(password)
    cy.contains('Přihlásit se').click({timeout: 100})
})

Cypress.Commands.add('createMember', (email, password) => {
    cy.loginAsAdmin()

    cy.visit('http://localhost:8000/users')
    cy.get('#new-user-email').type(email)
    cy.get('#new-user-password').type(password)
    
    cy.contains('label.form-check', 'MEMBER').find('input[type="checkbox"]').check()

    cy.contains('button.btn.btn-primary', 'Vytvořit uživatele').click();

    cy.clearCookies();
    cy.clearLocalStorage();
})

Cypress.Commands.add('createTrainer', (email, password) => {
    cy.loginAsAdmin()

    cy.visit('http://localhost:8000/users')
    cy.get('#new-user-email').type(email)
    cy.get('#new-user-password').type(password)
    
    cy.contains('label.form-check', 'TRAINER').find('input[type="checkbox"]').check()

    cy.contains('button.btn.btn-primary', 'Vytvořit uživatele').click();

    cy.clearCookies();
    cy.clearLocalStorage();
})

Cypress.Commands.add('createCommittee', (email, password) => {
    cy.loginAsAdmin()

    cy.visit('http://localhost:8000/users')
    cy.get('#new-user-email').type(email)
    cy.get('#new-user-password').type(password)

    cy.contains('label.form-check', 'COMMITTEE').find('input[type="checkbox"]').check()

    cy.contains('button.btn.btn-primary', 'Vytvořit uživatele').click();

    cy.clearCookies();
    cy.clearLocalStorage();
})

Cypress.Commands.add('createPlayer', (email, password) => {
    cy.loginAsAdmin()

    cy.visit('http://localhost:8000/users')
    cy.get('#new-user-email').type(email)
    cy.get('#new-user-password').type(password)

    cy.contains('label.form-check', 'PLAYER').find('input[type="checkbox"]').check()

    cy.contains('button.btn.btn-primary', 'Vytvořit uživatele').click();

    cy.clearCookies();
    cy.clearLocalStorage();
})