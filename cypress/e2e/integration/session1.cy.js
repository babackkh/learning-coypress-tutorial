/// <reference types="cypress"/>

it("Should Search Google", () => {
  cy.visit("https://google.com/");
  cy.get(".gLFyf").type("Cypress Documentation{enter}");
});

it("Should Check Cypress Website Title", () => {
  cy.visit("https://cypress.io");
  //cy.get('title').should("eq", 'JavaScript End to End Testing Framework | cypress.io testing tools');
  cy.get('[data-cy="tag-line"] > div').should('contain', 'The web has evolved.Finally, testing has too.')
});
