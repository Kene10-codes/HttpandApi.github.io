const myHttp = require('http');
const ourFs = require('fs');
const ourPath = require('path');

const ourServer = myHttp.createServer((request, response) => {
    if(request.url === "/"){
    ourFs.readFile(ourPath.join(__dirname, "index.html"), (error, data) => {
        response.writeHead(200, {'content-type': 'text.html'})
        response.write(data);
        response.end();
    })
    }

    if(request.url === "/about.html"){
        ourFs.readFile(ourPath.join(__dirname, '/about.html'), (error, data) => {
            response.writeHead(200, {'content-type': 'text.html'})
            response.write(data);
            response.end();
        })
    }
})


ourServer.listen(3100, ()=> {
    console.log("HNG server is running once again")
})

