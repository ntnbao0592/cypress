import LoginPage from "../pages/loginPage";

describe("Login test", () => {
    beforeEach("open login websit", () => {

        Cypress.on('uncaught:exception', (err, runnable) => {
            // Prevent Cypress from failing the test
            return false;
        });
        cy.visit("/login")
        cy.get(LoginPage.userForm).should("be.visible")
    })

    it("Login correct", () => {
        cy.get(LoginPage.userNameField).clear().type("ntnbao")
        cy.get(LoginPage.passwordField).clear().type("b@O11223344")
        cy.get(LoginPage.loginBtn).click()
        cy.get(LoginPage.userNameLabel, {timeout: 5000}).should("be.visible")
    })

    it("login incorrect failed", () => {
        cy.get(LoginPage.userNameField).clear().type("ntnbao")
        cy.get(LoginPage.passwordField).clear().type("b@O11223334")
        cy.get(LoginPage.loginBtn).click()
        cy.get(LoginPage.errorMessage).should("be.visible").contains("Invalid usernames and password!")
    })
})