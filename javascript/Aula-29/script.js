// const numbers = [5, 17, 15, 10, 11, 12, 19, 75, 45, 31, 22, 56]

// const newNumbers = numbers.filter((item, index, array) => item > 20);

// console.log(newNumbers);


const pessoas = [
    {nome: 'luiz', idade: 62},
    {nome: 'MARIA', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
]

const pessoasCom5LetrasOuMais = pessoas.filter((item) => item.nome.length >= 5);
const pessoasComMaisDe50Anos = pessoas.filter((item) => item.idade > 50);
const pessoasCujoNomeTerminaEmA = pessoas.filter((item) => item.nome.slice(0 -1) === 'a');
const terminaComA = pessoas.filter((item) => item.nome.toLocaleLowerCase().endsWith('a'));

const retornaNomes = () => {
    for (let i in terminaComA) {
        console.log(terminaComA[i].nome);
    }
}
retornaNomes();