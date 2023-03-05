class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + ' já ligado')
            return;
        }
        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(this.nome + ' já desligado')
            return;
        }
        this.ligado = false;
    }
}

class SmartPhone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
};

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }

    // ligar() {
    //     console.log('olha, você alterou o metodo ligar')
    // }

    falarOi() {
        console.log('oi ' + this.nome )
    }
}

const s1 = new SmartPhone('Iphone', 'preto', 'XR pro max')

const t1 = new Tablet('Iped', true)
t1.ligar()
t1.falarOi()
console.log(t1)