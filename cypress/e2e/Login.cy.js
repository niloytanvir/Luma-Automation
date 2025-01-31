import Login from "../PageObjects/LoginPageObjects"

describe('Login', () => {
    it('Login', () => {
      cy.visit(' https://magento.softwaretestingboard.com/') // Launching the Website
      
    cy.fixture('Logininfo.json').then((data)=>{

      const ln = new Login()
      ln.clickLoginButton()
      ln.setEmail(data.email)
      ln.setPassword(data.password)
      ln.clickSignIn()
      ln.verifyLogin()

    })

    })
  })