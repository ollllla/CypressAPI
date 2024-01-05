describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
}),

describe("HTTP Requests", ()=>{
  it("Get Call", ()=> {
      cy.request('GET', 'https://httpbin.org/get')
      .its('status')
      .should('equal', 200);
  })
});