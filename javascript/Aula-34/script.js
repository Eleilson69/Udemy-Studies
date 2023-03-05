const produto = {nome: 'produto', preco: 1.8, material: 'porcelana' };

// spread operator usado para copiar o objeto para dentro de outra variavel
// const outraCoisa = { ...produto, outroNome:'arroz' };

// Object.assign() esse metodo também é usado para copiar um objeto para detro de outra variavel
// const outraCoisa = Object.assign({}, produto, { material: 'porcelana'});

// Object.defineProperty(produto, 'nome', {
//     configurable: true,
//     enumerable: true,
//     value: 'caneca',
//     writable: true
// })

// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

// console.log(Object.values(produto));

for( let [chave, value] of Object.entries(produto)) {

    console.log(chave, value)
}