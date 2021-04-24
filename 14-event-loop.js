// started operating system process
// console.log('first')
// setTimeout(() => {  //setTimeout is async
//     console.log('second')
// }, 0)
// console.log('third')
// completed and exited operating system process

// setInterval(() => {  //setInterval is also async
//     console.log('hello')
// }, 2000);
// console.log(`I will run first`)

const http = require('http')

const server = http.createServer((req,res) => {
    console.log('request event')
    res.end('Hello World')
})

server.listen(5000, () => {
    console.log('Server listening on port : 5000......')
})