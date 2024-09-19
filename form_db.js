const sqlite3 = require('sqlite3').verbose();
var http = require('http');
var fs = require('fs');
var url = require('url');
http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var nomearquivo = "." + q.pathname;
    console.log("Nome do arquivo: " + nomearquivo);

    if(nomearquivo == "./"){
      fs.readFile("organization.html", function(err, data) {
        if(err){
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Arquivo não encontrado!");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
    }
    else if(nomearquivo == "./battle.html"){
      fs.readFile(nomearquivo, function(err, data) {
        if(err){
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Arquivo não encontrado!");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
          
    }

    else if(nomearquivo == "./registra.html"){
      let nome = q.query.nome;
      let email = q.query.email;
      let senha = q.query.senha;

      let db = new sqlite3.Database('./db/banco.db', (err) => {
        if (err) {
          return console.error(err.message);
        }
        console.log('Conectou com o banco de dados!');
      });

      // insere um registro no banco de dados
      db.run(`INSERT INTO usuario(nome, email, senha) VALUES(?,?,?)`, ['Clécio','clecio@teste.com','123'], function(err) {
        if (err) {
          return console.log(err.message);
        }
        // get the last insert id
        console.log(`Registro feito com sucesso no id ${this.lastID}`);
      });

      db.close((err) => {
        if (err) {
          return console.error(err.message);
        }
        console.log('Fechou a conexão com o banco de dados!');
      });
    }

    else{
    //console.log("Nome: " + q.nome + " E-mail: " + q.email + " Senha: " + q.senha);
      fs.readFile(nomearquivo, function(err, data) {
        if(err){
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Arquivo não encontrado!");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
    }
}).listen(8080, () => {
    console.log("O servidor foi iniciado na porta 8080");
});
