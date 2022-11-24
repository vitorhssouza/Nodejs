const express = require('express');                 // modulo express
const exphbs = require('express-handlebars');       // módulo handlebars
const app = express();                              // Classe express
const conn = require('./db/conn');                  // Modulo de conexão com banco de dados

const Clube = require('./models/Clube');

// Configurando o templates engine(handlebars)
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

//Configuração de formulario para receber os dados
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Rota de post para cadastro de usuario na tabela clube
app.post('/clube/save', async (req, res) => {
    const nome = req.body.nome;
    let status = req.body.status;

    // Tratando o valor que vou passar do status para o banco
    if (status == 'on'){
        status = true;
    }else{
        status = false;
    }

    await Clube.create({nome, status});
    res.redirect('/clubes')

});

app.get('/', (req, res) => {
    res.render('home');
});

// Rotas do Clube
app.get('/clubes', (req, res) => {
    res.render('clubes');
});


// Criando nossa tabela
conn.sync().then(() => {
    app.listen(3000, () => {
        console.log('O servidor está rodando.');
    });
}).catch((error) => {
    console.log(error);
})



