const criaPessoa = (nome, sobrenome,aultura, peso) => {
    return {
        nome,
        sobrenome,
        aultura,
        peso,
        // getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },
        // setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        fala(assunto) {
            return `${this.nome} ${this.sobrenome} está ${assunto}`;
        }, 
        get imc(){
            const indece = this.peso / this.aultura ** 2;
            return indece.toFixed(2);
        }
       
    };
};

const p1 = criaPessoa('luiz', 'otavio', 1.80, 75);
const p2 = criaPessoa('Maria', 'joaquina', 1.60, 45);
const p3 = criaPessoa('joão', 'mariano', 1.75, 80);

console.log(p1.fala('falando sobre js'));

p1.nomeCompleto = 'Maria oliveira mendes'
console.log(p1.nome);
console.log(p1.sobrenome);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);


