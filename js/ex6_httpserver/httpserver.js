let http = require("http");
let querystring = require("querystring");
let server = http.createServer().listen(3000);
server.on("request", function(request, response) {
  if (request.method == "POST") {
    let body = "";

    request.on("data", function(data) {
      body += data;
    });

    request.on("end", function() {
      let post = querystring.parse(body);
      console.log(post);
      response.writeHead(200, { "Content-Type": "text/plain" });
      response.end("Hello World");
    });
  }
});
console.log("server listening on "+port);
/*
const http = require("http");
const port = 3000;
const requestHandler = (request, response) => {
  console.log(request.url);
  response.end("Hello Node.js Server!");
};
const server = http.createServer(requestHandler);

server.listen(port, err => {
  if (err) {
    return console.log("something bad happened", err);
  }
  console.log(`server is listening on` + port);
});
*/
