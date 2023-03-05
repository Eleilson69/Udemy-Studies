/*
Luiz otavio miranda tem 30 anos, pesa 84 kg tem 1.80 de altura e seu IMC é de 
*/
const anoAtual = 2022;
const nome = 'Luiz';
const sobrenone = 'Ótavio';
const idade = 30;
const altura = 1.80;
const peso = 84;
let imc = peso / (altura * altura);
let anoNascimento = anoAtual - idade;

console.log(`${nome} ${sobrenone} tem ${idade} anos, pesa ${peso}kg tem ${altura} nasceu em ${anoNascimento} seu IMC é ${imc.toFixed(2)}`);