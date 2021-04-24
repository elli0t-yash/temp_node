const http = require('http')

const server = http.createServer((req,res) => {
    // console.log(req);
    if(req.url === '/'){
        res.end('Welcome to home page')
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href = "/">back home</a>
    `)
    // res.write('WELCOME TO OUR HOME PAGE')
    // res.end()
})

server.listen(5000)