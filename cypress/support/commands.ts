/// <reference types="cypress" />
import '@testing-library/cypress/add-commands';

/* Get element using the data-testid */
Cypress.Commands.add('getByTestId', (id) => {
  return cy.get(`[data-testid="${id}"]`);
});
