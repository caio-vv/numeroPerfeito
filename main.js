const prompt = require('prompt-sync')();
const numeroPerfeito = require('./funcao')

let pegarNumero = prompt("qual numero? ")
console.log(pegarNumero)

if (numeroPerfeito.ehPerfeito(Number(pegarNumero))){
    console.log(pegarNumero + " é um numero perfeito")
} else {
    console.log(pegarNumero + " não é")
}