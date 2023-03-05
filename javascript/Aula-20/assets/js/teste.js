const myArray = [
    {
        nome: 'Eleilson',
        sobrenome: 'santos',
        idade: 23
    },
    {
        nome: 'otavio',
        sobrenome: 'mendes',
        idade: 25
    },
];

const destruction = { nome, sobrenome, idade } = myArray[0];

console.log(nome, sobrenome, idade)

const myArrayJSON = JSON.stringify(myArray);
console.log(myArrayJSON);
localStorage.setItem('pessoaList', myArrayJSON);
const getPessoaList = localStorage.getItem('pessoaList');
const pessoaListParse = JSON.parse(getPessoaList);
console.log(pessoaListParse);