const express = require("express"); // Importando
const app = express(); //Iniciando o express

//Rotas
app.get("/", function (req, res) {
  res.send("Bem vindo!");
});

//Rotas com parâmetros
app.get("/ola/:nome/:empresa", function (req, res) {
  var nome = req.params.nome;
  var empresa = req.params.empresa;
  res.send("Olá, " + nome + " do " + empresa);
});

//Rotas com parâmetros NÃO obrigatórios
app.get("/blog/:artigo?", function (req, res) {
  var artigo = req.params.artigo;
  if (artigo) {
    res.send("Blog da Noticia." + " artigo: " + artigo);
  } else {
    res.send("Bem vindo ao blog.");
  }
});

/*
Query Params 
localhost/youtube?QUERY_PARAMS=VALOR
*/
app.get("/youtube?", function (req, res) {
  var canal = req.query["canal"];
  if (canal) {
    res.send("www.youtube.com/" + canal);
  } else {
    res.send("www.youtube.com");
  }
});

//Start o servidor
app.listen(4000, function (erro) {
  if (erro) {
    console.log("Ocorreu um erro!");
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});
