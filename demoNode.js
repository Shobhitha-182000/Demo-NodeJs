const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write(
      '<html><body><h1> Welcome to my Node Js project</h1><form action="/home" method="POST"><button type="Submit">go to home</button></form></body></html>'
    );
    return res.end();
  }
  if (url === "/home") {
    res.write(
      '<html><body><h1> Welcome  Home</h1><form action="/about" method="POST"><button type="Submit">go to about</button></form></body></html>'
    );
    return res.end();
  }
  if (url === "/about") {
    res.write(
      '<html><body><h1> Welcome to about Us page</h1><form action="/" method="POST"><button type="Submit">go to first page</button></form></body></html>'
    );
    return res.end();
  }
  res.setHeader("Content-type", "Text/html");
  res.write("<html><body><h1>My Name is Shobhitha</h1></body></html>");
  res.end();
});
server.listen(4000);
