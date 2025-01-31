class Checkout
{

    
    productlocator= '.product-items > :nth-child(1)'
    SelectSizelocator = '#option-label-size-143-item-166'
    SelectColorlocator = '#option-label-color-93-item-56'
    clickAddtoCartlocaotr = '#product-addtocart-button'
    verifyTextlocator = '.message-success > div'
    shoppingCartlocator = '.message-success > div > a'
    //div[data-bind='html: $parent.prepareMessageForHtml(message.text)'] a
    proceedCheckoutlocator = '.checkout-methods-items > :nth-child(1) > .action'
    emaillocator = "//div[@class='control _with-tooltip']//input[@id='customer-email']"
    firstNamelocator = '[name="shippingAddress.firstname"]'
    lastNamelocaotr = '[name="shippingAddress.lastname"]'
    companylocator = '[name="shippingAddress.company"]'
    addresslocator = '[name="street[0]"]'
    citylocator = '[name="shippingAddress.city"]'
    Statelocator = '[name="region_id"]'
    Ziplocator = '[name="shippingAddress.postcode"]'
    countrylocator = '[name="country_id"]'
    phonenumberlocator = '[name="shippingAddress.telephone"]'
    shippingmethodlocator = 'input[value="flatrate_flatrate"]'
    Nextbtnlocator = '.button'
    PlaceOrderbtnlocator= "button[title='Place Order']"
    ordererifytextlocator= '.base'

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

    clickshoppingCartItem()
    {
       cy.get(this.shoppingCartlocator).click()
    }

    clickProceedtocheckout()
    {
       cy.get(this.proceedCheckoutlocator).click()
    }

    setEmail(email)
    {
        cy.xpath(this.emaillocator).type(email)
    }

    setFirstname(firstname)
    {
        cy.get(this.firstNamelocator).type(firstname)
    }

    setLastname(lastname)
    {
        cy.get(this.lastNamelocaotr).type(lastname)
    }

    setCompany(company)
    {
       cy.get(this.companylocator).type(company)
    }

    setAddress(address)
    {
       cy.get(this.addresslocator).type(address)
    }

    setCity(city)
    {
        cy.get(this.citylocator).type(city)
    }

    setState(state)
    {
        cy.get(this.Statelocator).select(state)
    }

    setZip(zip)
    {
       cy.get(this.Ziplocator).type(zip)
    }
    setCountry(country)
    {
       cy.get(this.countrylocator).select(country)
    }
    setNumber(phonenumber)
    {
       cy.get(this.phonenumberlocator).type(phonenumber)
    }

    selectShippingMethod()
    {
       cy.get(this.shippingmethodlocator).check().should('be.checked')
    }

    clickNext()
    {
       cy.get(this.Nextbtnlocator).click()
    }
    clickPlaceorder()
    {
        cy.get(this.PlaceOrderbtnlocator).click()
    }
    verifyOrderConfirmation(orderverifytext)
    {
        cy.get(this.ordererifytextlocator).should('have.text', orderverifytext)
    }

    
}
   


export default Checkout;