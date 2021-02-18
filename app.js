const http = require("http");
const routes = require("./routes");

// createServer() - returns a server and takes a callback function called a
// requestListener - function that listens for every request
const server = http.createServer(routes);

// listen takes in a port name AND keeps on listening for request
server.listen(3000);
