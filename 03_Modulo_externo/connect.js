var mysql  = require('mysql2');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'xxxxxx',
  database : 'db_senai'
});
 
connection.connect(function(err){
    if(err) throw err;
    console.log('Connected');
});

connection.query('SELECT * FROM ANIMAL', (erro, linhas) => {
    if (erro) throw erro;

    console.log('Animais: ', linhas, '\n\n')
})