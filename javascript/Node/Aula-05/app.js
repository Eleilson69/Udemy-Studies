const path = require('path'); 
const caminhoArquivo = path.resolve(__dirname, 'teste.json') 
const escrever = require('./modules/escrever');
const csrever = require('./modules/escrever') 
const ler = require('./modules/ler');

// const array = [
//     {nome: 'joão'},
//     {nome: 'maria'},
//     {nome: 'jose'},
//     {nome: 'adriano'},
// ];

// const json = JSON.stringify(array, '', 2)
// escrever(caminhoArquivo, json);


async function lerArquivo(caminho) {
    const dados = await ler(caminho);
    renderDados(dados); 
}

const renderDados = (dados) => {
    dados = JSON.parse(dados);
    dados.forEach(item => {
        console.log(item);
    });
}

lerArquivo(caminhoArquivo)
