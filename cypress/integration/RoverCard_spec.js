describe("As a user, I should be able to delete an image from view", () => {
  beforeEach(() => {
    cy.intercept({method: 'Get', path:''}, {fixture: 'perseverance-stub.json'})
    cy.request('http://localhost:3000')
})

it("As a user, I should be able to delete an image", () => {
    cy.get('.perseverance').click()
    cy.get('.select-date').click().type('2022-04-04')
    cy.get('.submit').click()
    cy.get('.card').click({ multiple: true })
    cy.get('.data-container').should('be.empty')
  })
})
