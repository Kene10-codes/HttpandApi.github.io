const myOs = require('os');

const myFreeMemory = myOs.freemem();
console.log(myFreeMemory);

const myTotalMemory = myOs.totalmem();
console.log(myTotalMemory);

const myDevicePlatform = myOs.platform();
console.log(myDevicePlatform);

const mySystInfo = myOs.cpus();
console.log(mySystInfo);

const sysArch = myOs.arch();
console.log(sysArch);

const myHostName = myOs.hostname();
console.log(myHostName);

const myDirName = myOs.homedir();
console.log(myDirName);

const releaseInfo = myOs.release();
console.log(releaseInfo);