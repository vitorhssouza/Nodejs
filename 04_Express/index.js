const express = require('express');
const app = express();
const porta = 3000; // Endereço para acesso ao servidor

app.get('/', (requisicao, resposta) => {
    // enviando essa resposta
    resposta.send('Está é minha primeira página utilizando o node.js')
});


app.listen(porta, ()=>{
    console.log('A aplicação está rodando na porta' +porta);
})

