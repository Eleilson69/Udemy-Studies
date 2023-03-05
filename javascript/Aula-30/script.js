// const numbers = [5, 17, 15, 10, 11, 12, 19, 75, 45, 31, 22, 56]

// const newNumbers = numbers.map((item) => item * 2);

const pessoas = [
    {nome: 'luiz', idade: 62},
    {nome: 'MARIA', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
]

const nomes = pessoas.map((item) => item.nome);
const idades = pessoas.map((item) => ({ idade: item.idade}));
const comIds = pessoas.map((item, indece) => {
    const newObj = { ...item };
    newObj.id = indece;
    return newObj;
})

console.log(nomes);
console.log(idades);
console.log(comIds);