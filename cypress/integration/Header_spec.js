describe("Header should render", () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it("Should have a header", () => {
    cy.get('.header').should('be.visible')
  })

  it("Should display app name", () => {
    cy.get('.header').contains('Red Rover')
  })

  it("Should display home button", () => {
    cy.get('.home').contains('Home')
  })
})
