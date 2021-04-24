const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('Home Page')
    }
    if(req.url === '/about'){
        // blocking code
        for (let i = 0; i < 200; i++) {
            for (let j = 0; j < 200; j++) {
               console.log(`${i} ${j}`)
            }
           
        }
        res.end('About us')
    }
})

server.listen(5000, () => {
    console.log('Server listening on port 5000....')
})