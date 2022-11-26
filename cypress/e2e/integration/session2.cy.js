/// <reference types="cypress"/>

describe('Session 2 Test Suite - Selecting DOM elements', () => {
    it('should visit play2 website and type babackkk', () => {
        cy.visit('http://play2.automationcamp.ir');
        cy.get('#fname').type('Babackkk');
    }),

        /*  it('should visit tables website and scroll horizontally', () => {
             cy.visit('https://datatables.net/examples/basic_init/scroll_x.html');
             cy.get('#example').scrollIntoView().scrollTo('right')
         }); */
        it('should test contains selector', () => {
            cy.visit('https://datatables.net/examples/basic_init/scroll_x.html');
            cy.get('#example').scrollIntoView().scrollTo('right')
        });
});