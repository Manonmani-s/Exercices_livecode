const express = require("express");

const server = express();

server.use(express.static("/home/dci/Documents/express_server/04_float"));

const port = 3025;

server.listen(port, function () {
    console.log(`Server is listening to the port ${port}`)
});