const myPath = require('path');

const ourDirectory = myPath.dirname(__filename);
console.log(ourDirectory);

const myExtension = myPath.extname(__filename);
console.log(myExtension);

const myBaseName = myPath.basename(__filename);
console.log(myBaseName);

const newPath = myPath.join(__dirname, "html", "newPage.html");
console.log(newPath);


