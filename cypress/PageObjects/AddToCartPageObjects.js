class AddToCart
{

    
    productlocator= '.product-items > :nth-child(1)'
    SelectSizelocator = '#option-label-size-143-item-167'
    SelectColorlocator = '#option-label-color-93-item-56'
    clickAddtoCartlocaotr = '#product-addtocart-button'
    verifyCartitemlocator = '.showcart > .counter'

    clickonProduct()
    {
        cy.get(this.productlocator).click() 
    }

    selectSize()
    {
        cy.get(this.SelectSizelocator).click() 
    }

    selectColor()
    {
        cy.get(this.SelectColorlocator).click()
    }

    clickAddtoCart()
    {
        cy.get(this.clickAddtoCartlocaotr).click()
    }

    verifyCartItem()
    {
       cy.get(this.verifyCartitemlocator).should('be.visible') 
    }

    
}

export default AddToCart;
    

