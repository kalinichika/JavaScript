let http = require("http");
let querystring = require("querystring");

let postData = querystring.stringify({
  msg: "Hello World!"
});

let options = {
  hostname: "localhost",
  port: 3000,
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "Content-Length": postData.length
  }
};

let req = http.request(options, function(res) {
  console.log("STATUS: " + res.statusCode);
  console.log("HEADERS: " + JSON.stringify(res.headers));
  res.setEncoding("utf8");

  res.on("data", function(chunk) {
    console.log("BODY: " + chunk);
  });

  res.on("end", function() {
    console.log("No more data in response");
  });
});
req.on("error", function(e) {
  console.log("problem with request: " + e.message);
});
req.write(postData);
req.end();
console.log("server listening on"+options.port);
