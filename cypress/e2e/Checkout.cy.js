 import Checkout from "../PageObjects/CheckoutPageObjects"

describe('Check product successfully added to Cart and Checkout', () => {
    it('Checkout', () => {

      cy.visit(' https://magento.softwaretestingboard.com/') // Launching the Website

      const checkout = new Checkout()

      checkout.clickonProduct() //Clicking on the product
      checkout.selectSize() //selecting size
      checkout.selectColor() // selecting color
      checkout.clickAddtoCart() // Clicking on add to cart
      checkout.clickshoppingCartItem()
      checkout.clickProceedtocheckout()
      cy.wait(10000)
      checkout.setEmail('tanvir@gmail.com')
      checkout.setFirstname("Tanvir")
      checkout.setLastname("Ahmed")
      checkout.setCompany("Banglalink")
      checkout.setAddress("Bonoshree")
      checkout.setCity("Clear Water")
      checkout.setState("Florida")
      checkout.setZip("12345-6789")
      checkout.setCountry("United States")
      cy.wait(10000)
      checkout.setNumber("123456789")
      checkout.selectShippingMethod()
      checkout.clickNext()
      checkout.clickPlaceorder()
      checkout.verifyOrderConfirmation("Thank you for your purchase!")

      

      // cy.get().click() //Clicking on the product

      // cy.get().click() //selecting size

      // cy.get().click() // selecting color

      // cy.get().click() // Clicking on add to cart

      // cy.get().should('contain.text','You added Radiant Tee to your shopping cart.') // verifying the text

      // cy.get().click() // Entering the shopping cart
      
      // //cy.get('.base').should('have.text','Shopping Cart')  //Verifying the text on the cart
 

    })
  })