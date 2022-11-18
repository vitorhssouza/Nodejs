const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');
const app = express();

// Configurando o handlebars
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// configuração para aceitar css 
app.use(express.static('public'));


// Middlewares para receber dados do formularios
app.use(
    express.urlencoded({extended: true})
);
app.use(express.json());


// Rota de usuários
app.get('/cadastros', (req,res) => {
    const sql = `SELECT * FROM usuario`

    conn.query(sql, (error, cadastros) => {
        if(error){
            console.log(error);
        }
        res.render('cadastros', {cadastros});
    })

    
});

// posto usuario 
app.post('/usuario/save', (req, res) => {
    //Buscando dados do formulário
    const nome = req.body.nome;
    const endereco = req.body.endereco;
    const email = req.body.email;
    const dataNascimento = req.body.dataNascimento;
    
    const sql = `INSERT INTO usuario (nome_usuario, endereco_usuario, email_usuario, data_nascimento_usuario)
        VALUES ('${nome}', '${endereco}', '${email}', '${dataNascimento}')`

        conn.query(sql, (error) => {
            if(error){
                console.log(error);
            }
            res.redirect('/cadastros');
        })
    
});

// Rota principal
app.get('/', (req, res) => {
    res.render('home');
});

// Criando conexão com Banco de dados
const conn = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Ci&nci4d&d4d0s2008',
    database: 'db_comum'
});

conn.connect((error) => {
    if(error){
        console.log(error);
        return
    }
    console.log('Conectou ao banco db_comun');

    app.listen(3000, () => {
        console.log('O servidor está rodando.')
    } )
});
