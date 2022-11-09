var mysql  = require('mysql2');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Ci&nci4d&d4d0s2008',
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