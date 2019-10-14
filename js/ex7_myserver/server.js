const http = require("http");
const fs = require("fs");
http
  .createServer((req, res) => {
    switch (req.url) {
      case "/":
        res.writeHead(200, { "Content-Type": "text/html" });
        const html = fs.readFileSync("index.html", "utf-8");
        res.end(html);
        break;
      case "/style.css":
        res.writeHead(200, { "Content-Type": "text/css" });
        const css = fs.readFileSync("style.css", "utf-8");
        res.end(css);
        break;
      case "/app.js":
        res.writeHead(200, { "Content-Type": "text/javascript" });
        const js = fs.readFileSync("app.js", "utf-8");
        res.end(js);
        break;
      default:
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Не найдено.");
        break;
    }
  })
  .listen(3000, () => {
    console.log("Server listening...");
  });
/* 
//длинный вариант  того же самого
const server = http.createServer();

server.on("request", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" }); 
  res.end("Response");
});

server.listen(3000, () => {
  console.log("Server listening...");
}); //(port, ip_address)
*/
