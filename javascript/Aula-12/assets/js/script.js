const frutas = ['uva', 'maçã', 'pera'];

const pessoas = [
    {
    nome: 'Andre',
    sobrenome: 'rocha',
    idade: 30
    },
    {
    nome: 'Eleilson',
    sobrenome: 'santos',
    idade: 23
    }
]
// for in me retorna o indece do array ou objeto para cada iteração;
for (let i in frutas) {
    console.log(frutas[i]);
}
// for of me retorana o valor do indece do array para cada iteração
for (let valor of pessoas) {
    console.log(valor);
}
// const frutas = ['uva', 'maçã', 'pera'];

// for (let i in frutas) {
//     console.log(frutas[i]);
// };