class ControleRemooto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    //Método de instancia
    aulmentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }

    //Método estatico
    static trocaPilha() {
        console.log('ok vou trocar')
    }
}

const controle1 = new ControleRemooto('LG');
controle1.aulmentarVolume()
controle1.aulmentarVolume()
controle1.aulmentarVolume()
console.log(controle1)

ControleRemooto.trocaPilha()

console.log(Math.random())