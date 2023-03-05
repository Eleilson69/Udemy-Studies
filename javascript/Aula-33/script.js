function Produto(nome, preço, estoque) {
    this.nome = nome;
    this.preço = preço;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // mostra o valor
        writable: false, // pode alterar 
        configurable: true, // configuravel
    }) 
}

const p1 = new Produto('camista', 20, 3);

console.log(p1)