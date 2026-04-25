// 19
describe('Create an expected payment for a selected member)', () => {
  it('creates an expected payment and it is visible in the payments list', () => {
    cy.loginAsAdmin()
    cy.visit('http://localhost:8000/members')

    cy.contains('tr', 'Jana').find('input.form-check-input').check();

    cy.contains('button', 'Připravit očekávanou platbu').click();

    cy.get('#prepare-title').type('Obcerstveni');
    cy.get('#prepare-amount').type('1500');
    cy.get('#prepare-due-date').type('2026-05-07');
    
    cy.contains('button', 'Vytvořit očekávané platby').click();

    cy.visit('http://localhost:8000/payments')
    cy.contains('tr', 'Obcerstveni').should('be.visible')

  })
})

// 20
describe('Create a manual transaction (unmatched)', () => {
  const paymentNote = 'Partial payment1' + Date.now();

  it('creates a manual transaction and it is visible in the transactions list', () => {
    cy.loginAsAdmin()
    cy.visit('http://localhost:8000/payments/operations')

    cy.get('#payments-manual-amount').type('1000');
    cy.get('#payments-manual-date').type('2026-05-06');
    cy.get('#payments-manual-note').type(paymentNote);

    cy.contains('button', 'Zadat ruční transakci').click();
  
    cy.contains('tr', paymentNote).should('be.visible')
  })
})

// 21
describe('Match a manual transaction to an expected payment', () => {
  const paymentNote = 'Partial payment2' + Date.now();

  before(() => {
    cy.loginAsAdmin()
    cy.visit('http://localhost:8000/payments/operations')

    cy.get('#payments-manual-amount').type('1000');
    cy.get('#payments-manual-date').type('2026-05-06');
    cy.get('#payments-manual-note').type(paymentNote);

    cy.contains('button', 'Zadat ruční transakci').click();
  })

  it('matches a manual transaction to an expected payment and the match is visible in the payments list', () => {
    cy.visit('http://localhost:8000/payments/operations')

    cy.get('#payments-match-tx')
      .find('option:not([value=""])')
      .first()
      .then($opt => cy.get('#payments-match-tx').select($opt.val()));

    cy.get('#payments-match-payment')
      .find('option:not([value=""])')
      .first()
      .then($opt => cy.get('#payments-match-payment').select($opt.val()));

    cy.contains('Spárovat platbu').click();

    // cy.contains('tr', paymentNote).should('be.visible')
    // cy.contains('Obcerstveni').should('be.visible')
    cy.contains('tr', 'Jana Nováková').should('contain', 'Obcerstveni')

  })
})

// 22
describe('Payments overview shows partially paid with correct open amount', () => {
  const paymentNote = 'Partial payment3' + Date.now();

  before(() => {
    cy.loginAsAdmin()

    cy.visit('http://localhost:8000/members')

    cy.contains('tr', 'Jana').find('input.form-check-input').check();

    cy.contains('button', 'Připravit očekávanou platbu').click();

    cy.get('#prepare-title').type('Obcerstveni2');
    cy.get('#prepare-amount').type('1500');
    cy.get('#prepare-due-date').type('2026-05-07');
    
    cy.contains('button', 'Vytvořit očekávané platby').click();

    cy.visit('http://localhost:8000/payments/operations')

    cy.get('#payments-manual-amount').type('1000');
    cy.get('#payments-manual-date').type('2026-05-06');
    cy.get('#payments-manual-note').type(paymentNote);

    cy.contains('button', 'Zadat ruční transakci').click();

    cy.get('#payments-match-tx')
      .find('option:not([value=""])')
      .first()
      .then($opt => cy.get('#payments-match-tx').select($opt.val()));

    cy.get('#payments-match-payment')
      .find('option:not([value=""])')
      .first()
      .then($opt => cy.get('#payments-match-payment').select($opt.val()));

    cy.contains('Spárovat platbu').click();

    cy.contains('tr', 'Obcerstveni2').should('be.visible')
  })
  it('shows partially paid with correct open amount', () => {
    cy.loginAsAdmin()
    cy.visit('http://localhost:8000/payments')

    cy.contains('tr', 'Obcerstveni2').should('contain', 'Částečně uhrazeno')
    cy.contains('tr', 'Obcerstveni2').should('contain', '500.00 Kč')
  })
})