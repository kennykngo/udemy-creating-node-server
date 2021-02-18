const http = require("http");
const fs = require("fs");

// createServer() - returns a server and takes a callback function called a
// requestListener - function that listens for every request
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title><head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    // on() allows you to listen to certain events
    // listen for "data" event and works with (chunk)s
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    // have all of these chunks
    // to work with them, need to Buffer
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      // takes in whatever the user wrote by splitting the message and taking whatever is on the right of it
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, function (err, result) {
        if (err) console.log("error", err);
      });
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }

  //   process.exit();
  // setting the header as Content-Type with the TYPE as text/html
  // Will show as Content-Type: text/html
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title><head>");
  res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  res.write("</html>");
  res.end();
});

// listen takes in a port name AND keeps on listening for request
server.listen(3000);
