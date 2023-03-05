class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    set nomeCompleto(valor) {
        console.log('Set')
        if(typeof valor !== 'string') return;
        this.sobrenome = valor;
    }

    get nomeCompleto() {
        console.log('get')
        return this.nome + ' ' + this.sobrenome;
    }

}

const p1 = new Pessoa('Elleylson', 'Santtos');

p1.nomeCompleto = 'Rocha'
console.log(p1.nomeCompleto)























// const _velocidade = Symbol('velocidade');

// class Carro {
//     constructor(nome) {
//         this.nome = nome;
//         this[_velocidade] = 0;
//     };

//     set velocidade(valor) {
//         console.log('SETTER');
//         if(typeof valor !== "number") return;
//         if(valor >= 100 || valor <= 0) return;
//         this[_velocidade] = valor;
//     };

//     get velocidade() {
//         console.log('GETTER')
//         return this[_velocidade];
//     };

//     acelerar() {
//         if(this[_velocidade] >= 100) return;
//         this[_velocidade]++;
//     };

//     freiar() {
//         if(this[_velocidade] <= 0) return;
//         this[_velocidade]--;
//     };
// };

// const c1 = new Carro('Fusca');

// for(let i = 0; i <= 200; i++) {
//     c1.acelerar()
// };

// c1.velocidade = 50;
// console.log(c1.velocidade);