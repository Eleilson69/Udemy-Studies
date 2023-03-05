const numbers = [5, 17, 15, 10, 11, 12, 19, 75, 45, 31, 22, 56];

const pessoas = [
    {nome: 'luiz', idade: 62},
    {nome: 'MARIA', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 89},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

pessoas.forEach((item, index, array) => {
    console.log(item.nome);
})