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


const pathExtName = path.extname('/Users/abhinav/Desktop/Linux/BE/NodeBasics/Globals/global.js');
console.log(pathExtName);


// /Users/abhinav/Desktop/Linux/BE/NodeBasics/Path/path.js
// /Users/abhinav/Desktop/Linux/BE/NodeBasics/ExportImport/exportFile.js

// two types
// absolute path
// relative path

// css
// absolute --> takes always root as ref
// relative --> which is dependent on something

// value
let a = 10; //absolute val
let b = a+10; // relative value

const joinedPath = path.join('/Users/abhinav/Desktop/Linux/BE', '/pathFile', 'myUsers/user.js');
console.log(joinedPath);
// /Users/abhinav/Desktop/Linux/BE/myUsers/user.js

const joinedPath2 = path.join('/Users/abhinav/Desktop/Linux/BE', '../', 'myUsers/user.js');
console.log(joinedPath2);

const parsedPath = path.parse('/Users/abhinav/Desktop/abhinav/BE/NodeBasics/Globals/global.js');
console.log(parsedPath);

const formatPath = path.format(parsedPath);
console.log(formatPath);
*/

const relativePath = path.relative('/Users/abhinav/Desktop/Linux/BE/NodeBasics/ExportImport/test/test.js', '/Users/abhinav/Desktop/Linux/BE/NodeBasics/Path/path.js');
console.log(relativePath);

const isAbsolute = path.isAbsolute('./Users/abhinav/Desktop/Linux');
console.log(isAbsolute);


// more path methods
// combine
// normalize
// resolve


