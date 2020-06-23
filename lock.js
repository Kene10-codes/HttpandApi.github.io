const express = require('express');
const ourFs = require('fs');
const ourPath = require('path');

const app = express();

app.get('/', (request, response) =>{
    response.send('<h1>This is a response</h1>');
});

app.get('/about', (request, response) => {
    if(request.url === '/about') {
        ourFs.readFile(ourPath.join(__dirname, "/about.html"), (error, data)=>{
            response.writeHead(200, {'content-type': 'text/html'})
            response.write(data);
            response.end();
        })
    }
})

app.use(express.static(ourPath.join(__dirname, 'public')));

app.listen(3300, ()=> {
    console.log("The server is up and running");
})