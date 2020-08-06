var http = require("http");

http
  .createServer(function (req, res) {
    res.end("Bem vindo!");
  })
  .listen(8181);
console.log("Meu servidor está rodando!");
