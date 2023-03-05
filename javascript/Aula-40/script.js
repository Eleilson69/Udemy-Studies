const falar = {
    falar() {
        console.log(`${this.nome} esta falndo`);
    }
};

const comer = {
    comer() {
        console.log(`${this.nome} esta comendo`);
    }
};

const beber = {
    beber() {
        console.log(`${this.nome} esta bebendo`);
    }
};

const pessoaPrototype = Object.assign({}, falar, comer, beber);
// const pessoaPrototype = {...falar, ...comer, ...beber}

function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    })
}

const p1 = criaPessoa('Elleylson', 'Santos')
const p2 = criaPessoa('Maria', 'Silva')
console.log(p1);
console.log(p2);