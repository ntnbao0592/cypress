import renderPage from "../pages/render";

describe("render test", () => {
    before("access page", () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // Prevent Cypress from failing the test
            return false;
        });
        cy.visit("/elements")
        cy.get(renderPage.mainCategory).should("be.visible")
    })

    it("Test render", () => {
        cy.get(renderPage.mainCategory).eq(0).click()
        cy.get(renderPage.mainCategory).then(elements =>{
            for(let i: 0; i < elements.length; i++){
                cy.wrap(elements).eq(i).click().then(element =>{
                    cy.wrap(element).find(renderPage.subCategory).then(subElements =>{
                        for(let j: 0; j < subElements.length; j++){
                            cy.wrap(subElements).eq(j).click()
                        }
                    })
                })
            }
            
        })

    })
})