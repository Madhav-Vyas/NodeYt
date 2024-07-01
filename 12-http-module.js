const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("Welcome to our home page")
    }
    if (req.url === "/about") {
        res.end("This is our short history")
    }
    res.end(`
        <h1>OOps!</h1>
        <p>cnat find the page</p>
        <a href="/">back home</a>
        `)

})
server.listen(5000)