const inputDepositar = document.querySelector('#Depositar');
const inputSacar = document.querySelector('#sacar');
const sacar = document.querySelector('#bnt-sacar');
const verValor = document.querySelector('#ver-valor');
const bntDepositar = document.querySelector('#bnt-depositar');

const objectConta = {
    agencia: 22,
    conta: 11,
    saldo: 10
}

function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
    this.init = () => {
        this.VericaAction();
    }
};

Conta.prototype.VericaAction = function(){
    bntDepositar.addEventListener('click', () => {
        this.valorDepositado(Number(inputDepositar.value));
    });
    sacar.addEventListener('click', () => {
        this.sacar(Number(inputSacar.value));
    });
}

Conta.prototype.sacar = function(valor) {
    if (objectConta.saldo < valor) {
        alert('saldo insuficiente');
        inputSacar.value = '';
        return
    }
    console.log(`saque realizado R$${Number(valor.toFixed(2))}`);
    objectConta.saldo -= valor;
    this.verSaldo();
    inputSacar.value = '';
    console.log(objectConta);
};

Conta.prototype.valorDepositado = function(valor) {
    console.log(`Deposito realizado R$${valor.toFixed(2)}`)
    objectConta.saldo += valor;
    this.verSaldo();
    inputDepositar.value = '';
    console.log(objectConta);
}

Conta.prototype.verSaldo = function() {
    console.log(`Agencia:${this.agencia} conta: ${this.conta} saldo: R$${objectConta.saldo.toFixed(2)}`);
}

const conta1 = new Conta(
    objectConta.agencia, objectConta.conta, objectConta.saldo
)

conta1.init()

// conta1.sacar(10)
// conta1.depositar(20)
// conta1.sacar(30)
// conta1.sacar(79)
// conta1.sacar(0.01)

// function CC(agencia, conta, saldo, limite){
//     Conta.call(this, agencia, conta, saldo);
//     this.limite = limite;
// };

// CC.prototype = Object.create(Conta.prototype);
// CC.prototype.constructor = CC;

// CC.prototype.sacar = function(valor) {
//     if(valor > (this.saldo + this.limite)){
//         console.log(`saldo insuficiente: R$${this.saldo}`)
//         return
//     };
//     this.saldo -= valor;
//     console.log(`saque realizado R$${valor.toFixed(2)}`);
//     this.verSaldo();
// }

// const cc = new CC(11, 14, 10, 100)
// cc.depositar(10)
// cc.sacar(30)
// cc.sacar(10)
// cc.sacar(1)