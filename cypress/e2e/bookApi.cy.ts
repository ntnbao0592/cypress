import bookApi from "../pages/bookAPI";

describe("tesst api", () => {
    it("get boook list", () => {
        cy.request(bookApi.getBookList).then((response) => {
            expect(response.status).to.eq(200)
            const responseBody = JSON.stringify(response.body, null, 2)
            cy.log(responseBody)
        })
    })
    it("check authorized", () => {
        cy.request({
            method: "POST",
            url:bookApi.checkAuthorized,
            body: {
                userName: "ntnbao",
                password: "b@O11223344"
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.true
        })
    })

    it("generate token by username and password", () => {
        cy.request({
            method: "POST",
            url:bookApi.generateToken,
            body: {
                userName: "ntnbao",
                password: "b@O11223344"
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            const token = response.body.token
            const responseBody = JSON.stringify(response.body, null, 2)
            cy.log(responseBody)
            cy.log(token)
        })
    })
})