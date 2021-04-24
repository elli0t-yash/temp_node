//! npm - global command, comes with node
//! npm --version 

//* local dependency - use it only in this particular porject
//* npm i <packageName>

//? global dependency - use it in any project
//? npm install -g <packageName>

//TODO package.json - manifest file (stores important info about project/package)
//TODO manual approach (create package.json in the root, create properties etc)
//TODO npm init (step by step, press enter to skip)
//TODO npm init -y (everything default)


const _ = require('lodash');

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log('hello world')

