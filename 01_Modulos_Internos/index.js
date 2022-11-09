const meuModulo = require('./meu_modulo')

const soma = meuModulo.soma;
const subtracao = meuModulo.subtracao;
const multiplicacao = meuModulo.multiplicacao;
const divisao = meuModulo.divisao;

let num1 = 10;
let num2 = 20;

console.log(soma(num1, num2));
console.log(subtracao(num1, num2));
console.log(multiplicacao(num1, num2));
console.log(divisao(num1, num2));