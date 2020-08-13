const express = require("express");
const server = express();

server.use(express.static("/home/dci/Documents/express_server/03_position"))

const port = 2024;
server.listen(port, function () {
    console.log("server is running")
});