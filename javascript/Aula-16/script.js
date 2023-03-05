// const max = (min, max) => min > max ? min : max;

// const max = (min, max) => {
//    Math.max(min, max);
// };
// console.log(max(10, 50));
// const ePaisagem = (retrato, paisagem) => {
//     const modoAtivo = retrato > paisagem;
//     if (modoAtivo === true) {
//         console.log('Modo retrato')
//         return
//     }
//     return  console.log('Modo paisagem')
// }
// ePaisagem(300, 600)
const fizzBuzz = (numero) => {
  if (typeof numero !== 'number') return numero;
  if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
  if (numero % 3 === 0) return 'Fizz';
  if (numero % 5 === 0) return 'Buzz';
  return numero
}

for (let i = 0; i < 100; i++){
    console.log(i, fizzBuzz(i))
}