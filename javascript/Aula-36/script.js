// new object => Object.prototype
// const objA = {
//     chaveA: 'A'
//     // __proto__: Object.prototype
// };

// const objB = {
//     chaveB: 'B'
//     // __proto__: Object.prototype
// };

// const objC = new Object();
// objC.chaveC = 'C';

// Object.setPrototypeOf(objB, objA);
// Object.setPrototypeOf(objC, objB);

// console.dir(objC.chaveC)

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.deconto = function(pencentual) {
    this.preco = this.preco - (this.preco * (pencentual / 100))
}
Produto.prototype.aumento = function(pencentual) {
    this.preco = this.preco + (this.preco * (pencentual / 100))
}

const p1 = new Produto('camiseta', 50);
// p1.deconto(100)
p1.aumento(100)

const p2 = {
    nome: 'caneca',
    preco: 15
}

Object.setPrototypeOf(p2, Produto.prototype)
p2.deconto(100)
console.log(p2);

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 99
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 45
    }
})

p3.aumento(10)

console.log(p3)