// https://docs.cypress.io/api/introduction/api.html

describe('End to end test', () => {
  it('Visits the login page', () => {
    cy.visit('/');
    cy.contains('h1', 'Login');
  });
});
