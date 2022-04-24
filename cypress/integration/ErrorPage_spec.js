describe("Error handling tests", () => {

  it('should throw error when incorrect filepath is given', () => {
    cy.visit('http://localhost:3000/ope')
    cy.get('.error-page').should('have.text', 'page not found')
  })
})
