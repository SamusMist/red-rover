describe("Error handling tests", () => {

  it('should throw error when no rover and or no date is selected', () => {
    cy.visit('http://localhost:3000')
    cy.get('.submit').click()
    cy.get('.error-display').should('have.text', 'Error: Please select a rover and a date within the rovers lifecycle')
  })

  it('should throw error when there is no data for selected date', () => {
    cy.visit('http://localhost:3000')
    cy.get('.perseverance').click()
    cy.get('.select-date').click().type('2022-04-05')
    cy.get('.submit').click()
    cy.get('.error-message').should('have.text', 'Rover is either charging or out of commission. Please select another date within the Rovers lifecycle')
  })
})
