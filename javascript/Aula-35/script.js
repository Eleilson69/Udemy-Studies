// construtora => molde (classe)
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
}

// instância
const pessoa1 = new Pessoa('Luiz', 'O'); // <= pessoa função contrutora
const pessoa2 = new Pessoa('Maria', 'A'); // <= pessoa função contrutora

// console.dir(pessoa1);
// console.dir(pessoa2);