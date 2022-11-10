const path = require('path');
const express = require('express');
const app = express();
const porta = 3000; // Endereço para acesso ao servidor
const basePath = path.join(__dirname, 'templates')

/*
const checkAutenticacao = function(requisicao, resposta, next){
    requisicao.authStatus = true
    if (requisicao.authStatus){
        console.log('Usuário logado!');
        next()
    }else{
        console.log('Usuário não está logado! Favor fazer login')
        next()
    }
}*/

// app.use(checkAutenticacao);


app.get('/produtos/:id',(requisicao, resposta) =>{
    const idProduto = requisicao.params.id;
    console.log('Resgatei o produto de ID: '+idProduto);
})

app.get('/', (requisicao, resposta) => {
    // enviando essa resposta
    //resposta.send('Está é minha primeira página utilizando o node.js')

    // Enviando um arquivo html
    resposta.sendFile(`${basePath}/index.html`);
});


app.listen(porta, ()=>{
    console.log('A aplicação está rodando na porta' +porta);
});

