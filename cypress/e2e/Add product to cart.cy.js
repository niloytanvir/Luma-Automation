import AddToCart from "../PageObjects/AddToCartPageObjects"

describe('Add product to Cart', () => {

    it('Adding Fusion Bacpack to Cart', () => {


      cy.visit(' https://magento.softwaretestingboard.com/') // Launching the Website

      const addCart = new AddToCart()
      addCart.clickonProduct() //Clicking on the product
      addCart.selectSize() //selecting size
      addCart.selectColor() // selecting color
      addCart.clickAddtoCart() // Clicking on add to cart
      addCart.verifyCartItem() //Cart item is visible


      // cy.get('.product-items > :nth-child(1)').click() 
      // cy.get('#option-label-size-143-item-167').click() 
      // cy.get('#option-label-color-93-item-56').click() 
      // cy.get('#product-addtocart-button').click() 
      // cy.get('.showcart > .counter').should('be.visible')  
 

    })
  })