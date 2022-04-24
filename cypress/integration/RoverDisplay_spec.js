describe("As a user, I should see the correct display on the images page", () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?earth_date=2022-4-4&api_key=ZwJF4eMjMCusSw5v7ISSzrh4nPPv91b4uoCx6rgq', {fixture: 'perseverance-stub.json'})
    cy.visit('http://localhost:3000')
    cy.get('.perseverance').click()
    cy.get('.select-date').click().type('2022-04-04')
    cy.get('.submit').click()
  })

  it("As a user, I should see the rover name, status, and sol", () => {
      cy.get('.image-info').should('have.text', 'PerseveranceStatus: activeSol: 400')
    })

  it("As a user, I should see the images for that day", () => {
      cy.get('.data-display').should('be.visible')
    })

    it("As a user, I should be able to go home", () => {
      cy.get('.home').click()
    })
})
