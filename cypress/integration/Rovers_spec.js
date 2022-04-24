describe("As a user, I should land on the home page and be able to select the inputs", () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos?earth_date=2022-4-4&api_key=ZwJF4eMjMCusSw5v7ISSzrh4nPPv91b4uoCx6rgq', {fixture: 'perseverance-stub.json'})
    cy.visit('http://localhost:3000')
})

it("As a user, I should be able to select a rover", () => {
    cy.get('.perseverance').click()
  })

it("As a user, I should be able to select a date", () => {
  cy.get('.select-date').click().type('2022-04-04')
  })

  it("As a user, I should be able to submit values to see images", () => {
    cy.get('.perseverance').click()
    cy.get('.select-date').click().type('2022-04-04')
    cy.get('.submit').click()
  })
})
