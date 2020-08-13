const express = require("express");
//const bodyParser = require("body-parser");

const server = express();

//Serve static files in our application
server.use(express.static("/home/dci/Documents/express_server", {
    "index": "calendar.html"
}));

const port = 2020;
server.listen(port, function () {
    console.log("server is running")
});