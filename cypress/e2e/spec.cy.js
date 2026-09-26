describe('template spec', () => {

  it('passes', () => {

    cy.visit('https://demoqa.com/')

    cy.get('header img').should('have.attr', 'src', '/assets/Toolsqa-DZdwt2ul.jpg')

    cy.get('header img').should('be.visible')

  })

})