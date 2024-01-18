/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays the header with the correct logo and button', () => {
    cy.getByTestId('header').should('be.visible');
    cy.getByTestId('logo').should('be.visible');
    cy.getByTestId('sign-in-button').should('be.visible');
    cy.getByTestId('cart-button').should('be.visible');
  });

  it('clicks on the cart button and opens the cart', () => {
    cy.getByTestId('cart-button').click();
    cy.getByTestId('cart').should('be.visible');
  });

  it('clicks on continue shopping and close button and that closes the cart', () => {
    cy.getByTestId('cart-button').click();
    cy.getByTestId('continue-shopping-button').click();
    cy.getByTestId('cart').should('not.exist');

    cy.getByTestId('cart-button').click();
    cy.getByTestId('close-cart-button').click();
    cy.getByTestId('cart').should('not.exist');
  });
});
