const osModule = require('os');
// console.log(osModule);
/*
const osArc = osModule.arch()
console.log(osArc);
const platform = osModule.platform();
console.log(platform);
const mem = osModule.freemem();
console.log((mem/1024)/1024);
const totalMem = osModule.totalmem();
console.log(totalMem);

const userInfo = osModule.userInfo();
console.log(userInfo);

const ostype = osModule.type();
console.log(ostype);

const homedir = osModule.homedir();
console.log(homedir);

const release = osModule.release();
console.log(release);

const uptime = osModule.uptime();
console.log((uptime/3600)/24);
*/

// console.log(osModule.cpus());
// console.log(osModule.version());

console.log(osModule.networkInterfaces());