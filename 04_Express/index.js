const path = require('path');
const express = require('express');
const app = express();
const porta = 3000; // Endereço para acesso ao servidor
const basePath = path.join(__dirname, 'templates')


app.get('/', (requisicao, resposta) => {
    // enviando essa resposta
    //resposta.send('Está é minha primeira página utilizando o node.js')

    // Enviando um arquivo html
    resposta.sendFile(`${basePath}/index.html`);
});


app.listen(porta, ()=>{
    console.log('A aplicação está rodando na porta' +porta);
})

