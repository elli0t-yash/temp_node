const {createReadStream} = require('fs')

const stream = createReadStream('./content/big.txt');

//! default 64kb
//! last buffer - remainder
//! highWaterMark - control size
//! const stream = createReadStream('./content/big.txt', {highWaterMark: 9000})
//! const steam = createReadStream('./content/big.txt', {encoding: 'utf-8'})


stream.on('data', (result) => {
    console.log(result);
})