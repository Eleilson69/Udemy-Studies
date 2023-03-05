const numbers = [5, 17, 15, 10, 11, 12, 19, 75, 45, 31, 22, 56];

const numerosPar = numbers
    .filter(item =>  item % 2 === 0)
    .map(item => item * 2)
    .reduce((acm, item) => acm + item);
console.log(numerosPar);

// const numeroReduzido = numbers.reduce((acm, item, index, array) => {
//     if (item % 2 !== 0) acm.push(item)
//     return acm;
// }, []);

// console.log(numerosPar);

// const pessoas = [
//     {nome: 'luiz', idade: 62},
//     {nome: 'MARIA', idade: 23},
//     {nome: 'Eduardo', idade: 55},
//     {nome: 'Leticia', idade: 89},
//     {nome: 'Rosana', idade: 32},
//     {nome: 'Wallace', idade: 47},
// ];

// const maisVelha = pessoas.reduce((acm, item) => {
//     if(acm.idade > item.idade) return acm;
//     return item
// })

// console.log(maisVelha);