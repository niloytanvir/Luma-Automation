
class Login
{
    signinlocator= '.panel > .header > .authorization-link > a'
    Emaillocator = '#email'
    Passowrdlocator = '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass'
    clickSignInlocaotr = '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2'
    verifylocator = ':nth-child(2) > .greet > .logged-in'

    clickLoginButton()
    {
        cy.get(this.signinlocator).click() 
    }

    setEmail(email)
    {
        cy.get(this.Emaillocator).type(email) 
    }

    setPassword(password)
    {
        cy.get(this.Passowrdlocator).type(password) 
    }

    clickSignIn()
    {
        cy.get(this.clickSignInlocaotr).click()
    }

    verifyLogin()
    {
       cy.get(this.verifylocator).should('have.text','Welcome, Tanvir Ahmed!')
    }

    
}

export default Login;