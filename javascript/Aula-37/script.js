// Produto => aumento, desconto
// camiseta, caneca, lapis

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(aumento) {
    this.preco += aumento;
}
Produto.prototype.desconto = function(deconto) {
    this.preco -= deconto;
}

const produto = new Produto('camiseta', 55);

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100))
}

const camiseta = new Camiseta('Regata', 45, 'Preta')

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    })
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const caneca = new Caneca('Caneca', 20, 'Plastico', 5);
caneca.estoque = 100
console.log(caneca);
console.log(camiseta);
console.log(produto);