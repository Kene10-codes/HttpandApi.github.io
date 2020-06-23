const myFileSystem = require('fs');
const newPath = require('path');

// const newFolder = myFileSystem.mkdir(newPath.join(__dirname, "/html"), {}, (error) =>{ 
//     if (error) {
//         console.log('error occurs');
//     } else {
//         console.log('folder and file successfully created');
//     }
// });

// console.log(newFolder);

const newCreatedFolder = myFileSystem.writeFile(newPath.join(__dirname, "/html", "index.html"), "<h1>Thi is a page</h1>", (error)=> {
    if(error) {
        console.log("File not created");
    } else {
        console.log("File created");
    }
})

console.log(newCreatedFolder);

const readMyFile = myFileSystem.readFile(newPath.join(__dirname, "/html", "index.html"), "utf-8", (error, data)=> {
    if (error) {
        console.log("Error occured")
    } else {
        console.log(data)
    }
});
console.log(readMyFile);