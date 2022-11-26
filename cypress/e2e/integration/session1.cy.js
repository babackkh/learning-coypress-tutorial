/// <reference types="cypress"/>

describe('Testing DOM for Text', () => {
  it("Should Search Google", () => {
    cy.visit("https://google.com/");
    cy.get(".gLFyf").type("Cypress Documentation{enter}");
  });

  it("Should Check Github Type Challenges url", () => {
    cy.visit("https://github.com/type-challenges/type-challenges");
    cy.get('.url').should('have.text', 'type-challenges')
  });
});