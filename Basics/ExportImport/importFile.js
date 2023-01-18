// options

// ES6 modules ---> 
// import
// import {} from 'somefile' -----> exported as named export
// import someName from 'somefile ----> exported as default export

// export 
// export const name = 'abhinav' ---> named export
// export default name

// CommonJS
// const {address} = require('./exportFile');

// ES6 module
import {name} from './exportFile.js'
import userinfo from './user.js'

// console.log('name is ',name);
console.log('address is ',name);

