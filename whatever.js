const express = require('express');

//create an app from express
// -> create a server 
const server = express();

//set the IP address and PORT
const hostname = "127.0.0.1";
const port = 4300;

//Routes
server.get("/", function(request, response){

    response.send("You are now home")



})



//make the server start listening for communication from clients

server.listen(port, hostname, () => console.log(`Server listening on http://${hostname}:${port}`))



