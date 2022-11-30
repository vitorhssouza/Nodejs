const express = require('express');                 // modulo express
const exphbs = require('express-handlebars');       // módulo handlebars
const app = express();                              // Classe express
const conn = require('./db/conn');                  // Modulo de conexão com banco de dados

const Clube = require('./models/Clube');
const Endereco = require('./models/Endereco')

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
app.get('/clubes', async (req, res) => {

    const clubes = await Clube.findAll({raw: true});
    res.render('clubes', {clubes});
});

// Rota para ir pro id dos clubes
app.get('/clube/:id', async (req, res) => {
    const id = req.params.id;

    const clube = await Clube.findOne({include: Endereco, where: {id: id}});

    res.render('clube', {clube: clube.get({plain: true})});
});

// Rotas para excluir 
app.get('/clube/delete/:id', async (req, res) => {
    const id = req.params.id;

    await Clube.destroy({where: {id: id}});

    res.redirect('/clubes');
});


// Rota edição do clube 
app.get('/clube/edit/:id', async (req, res) => {

    const id = req.params.id;

    const clube = await Clube.findOne({raw:true, where: {id: id}});

    res.render('clube-edit', {clube});
});

// Rota para atualizar arquivo clube
app.post('/clube/edit/save', async (req, res) => {
    const id = req.body.id;
    const nome = req.body.nome;
    let status = req.body.status;

    if(status == 'on'){
        status = true;
    }else{
        status = false;
    }

    const clubeAlterado = {
        id: id,
        nome: nome,
        status              // OBs como os nomes são iguais posso utilizar apenas um so
    }

    await Clube.update(clubeAlterado, {where: {id:id}})

    res.redirect('/clubes')

}); 

// Rotas do endereços 
app.post('/endereco/save', async (req, res) => {
    const ClubeId = req.body.ClubeId;
    const logradouro = req.body.logradouro;
    const cep = req.body.cep;
    const numero = req.body.numero;
    const complemento = req.body.complemento;

    const enderecoNovo = {logradouro, cep, numero, complemento, ClubeId};
    await Endereco.create(enderecoNovo);

    res.redirect(`/clube/${ClubeId}`);
})

// Rota para excluir endereço
app.get('/endereco/delete/:idClube/:idEndereco', async (req, res) => {
    const idClube = req.params.idClube;
    const idEndereco = req.params.idEndereco

    await Endereco.destroy({where: {id: idEndereco}})

    res.redirect(`/clube/${idClube}`)
})

// Criando nossa tabela
// .sync({force: true})
conn.sync().then(() => {
    app.listen(3000, () => {
        console.log('O servidor está rodando.');
    });
}).catch((error) => {
    console.log(error);
})



