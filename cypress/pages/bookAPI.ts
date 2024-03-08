const bookApi = {
    getBookList: {
        method: "GET",
        url: "BookStore/v1/Books"
    },
    checkAuthorized: "/Account/v1/Authorized",
    generateToken: "/Account/v1/GenerateToken"
}
export default bookApi