const path  = require('path');
// console.log(path);
/*
const pathDirName =  path.dirname('/Users/abhinav/Desktop/Linux/BE/NodeBasics/Globals/global.js');
console.log('dirname', pathDirName); //from path module
console.log(__dirname); //from globals

const pathFileNameWithExt = path.basename('/Users/abhinav/Desktop/Linux/BE/NodeBasics/Globals/global.js');
console.log('filename', pathFileNameWithExt);
console.log(__filename);

const pathFileName = path.basename('/Users/abhinav/Desktop/Linux/BE/NodeBasics/Globals/global.js', '.js');
console.log('filename', pathFileName);
*/

const pathExtName = path.extname('/Users/abhinav/Desktop/Linux/BE/NodeBasics/Globals/global.js');
console.log(pathExtName);




// two types
// absolute path
// relative path

// css
// absolute --> takes always root as ref
// relative --> which is dependent on something

let a = 10; //absolute val
let b = a+10; // relative value


