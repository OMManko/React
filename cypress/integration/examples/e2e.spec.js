describe('e2e test', () => {
  it('should be able to see detailed movie information', () => {
    cy.visit('/');
    cy
      .get('.movieCard')
      .contains('a')
      .click();
  });
});
