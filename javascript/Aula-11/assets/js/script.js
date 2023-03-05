// const frutas = ['maçã', 'banana', 'uva', 'pera', 'laranja']
// for (let i = 0; i < frutas.length; i++) {
//     console.log(`Index ${i}: ${frutas[i]}`)
// }
const main = document.querySelector('main');

const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i]
    const criaElemento = document.createElement(tag)
    criaElemento.innerText = texto
    main.append(criaElemento)
};