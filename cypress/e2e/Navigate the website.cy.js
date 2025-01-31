
describe('Luma Automation', () => {
  it('Navigate the website', () => {
    cy.visit(' https://magento.softwaretestingboard.com/') // Launching the Website
    cy.title().should('eq','Home Page') // Checking the title of the Home Page

    cy.get('.page-footer > .content').scrollIntoView({duration:2000});// Scrolled down to the footer from top
    cy.get('.page-header > .content').scrollIntoView({duration:5000});// Scrolled up to the top from footer

    cy.get('#ui-id-3 > span').should('have.text',"What's New") // Checlking the text of a span
  })
})