// função construtura => Pessoa (new);

function Pessoa(nome, sobremone){
    this.nome = nome,
    this.sobremone = sobremone
    this.metodo = () => {
        console.log(this.nome + ': sou um metodo')
    }
}

const p1 = new Pessoa('Elleilson', 'Santos');
const p2 = new Pessoa('Maria', 'Ellena');

p1.metodo()
console.log(typeof(p2));