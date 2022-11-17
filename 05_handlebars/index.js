const express = require('express'); // Importando pacote/modulo express
const exphbs = require('express-handlebars'); //importando pacotes/módulos handlebars
const app = express();


app.engine("handlebars", exphbs.engine());
app.set('view engine', 'handlebars');

// Rota de produtos
app.get('/produtos', (req, res) => {
    const produtos = [
        {descricao: "Arroz", preco: 23.99, promocao:true},
        {descricao: "Feijão", preco: 13.99, promocao:false},
        {descricao: "Cerveja", preco: 23.99, promocao:true},
        {descricao: "Carne", preco: 55.99, promocao:false}
    ];

    res.render('produtos', {produtos});

})

// Rota principal
app.get('/', (req, res) =>{
    const usuario = {
        nome: 'Vitor',
        email: 'vitorugo_kta@hotmail.com',
        dataNascimento: '18/07/1994'
    };

    const usuarioLogado = true;

    const array = [1, 2, 3, 4, 5, 6, 7];

   
    res.render('home', {usuario, usuarioLogado, array});
});

// escutar o servidor
app.listen(3000);
