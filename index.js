/*
A Restful APi
*/

// dependencies

const http = require('http');

// app object - module scaffolding

const app = {};

//configuration 
app.config = {
    port : 3000
};

//create server
app.createServer =()=>{
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port , ()=>{
        console.log(`Server in the ${app.config.port}`);
    })
}
app.handleReqRes = (req, res)=>{
    res.send('Hello World');
}

// start Server
app.createServer();