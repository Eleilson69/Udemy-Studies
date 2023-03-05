const form = document.querySelector('.form');
const bnt = document.querySelector('#bnt');
const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');
const msg = document.querySelector('.status');
const titleIMC = document.querySelector('.titleIMC');
const tabelaIMC = document.querySelector('.Tabela-IMC');
const bntRetorn = document.querySelector('#bntRetorn');

const imcCalc = () => {

    const imcNivel = {
        peso0: 'Abaixo do peso',
        peso1: 'Peso normal',
        peso2: 'Sobrepeso',
        peso3: 'Obesidade grau I',
        peso4: 'Obesidade grau II',
        peso5: 'Obesidade grau III'
    };
    

    const imcValue = validation();
    if (imcValue > 39.9) {
        msg.style.background = 'red';
        return msg.innerHTML = `Seu IMC é: ${imcValue} (${imcNivel.peso5})`;
    }
    if (imcValue >= 35) {
        msg.style.background = 'red';
        return msg.innerHTML = `Seu IMC é: ${imcValue} (${imcNivel.peso4})`;
    }
    if (imcValue >= 30 && imcValue <= 34.9) {
        msg.style.background = 'red';
        return msg.innerHTML = `Seu IMC é: ${imcValue} (${imcNivel.peso3})`;
    };
    if (imcValue >= 25 && imcValue <= 29.9) {
        msg.style.background = 'red';
        return msg.innerHTML = `Seu IMC é: ${imcValue} (${imcNivel.peso2})`;
    };
    if (imcValue >= 18.5 && imcValue <= 24.9) {
        msg.style.background = 'green'
        return msg.innerHTML = `Seu IMC é: ${imcValue} (${imcNivel.peso1})`;
    };
    if (imcValue < 18.5) {
        msg.style.background = 'red';
        return msg.innerHTML = `Seu IMC é: ${imcValue} (${imcNivel.peso0})`;
    };
}

const validation = () => {

    const inputPeso = Number(peso.value);
    const inputAltura = Number(altura.value);

    if (!inputPeso){
        msg.style.background = 'red';
        msg.style.display = 'flex';
        return msg.innerHTML = 'Peso invalido';
    }; 

    if (!inputAltura){ 
        msg.style.background = 'red';
        msg.style.display = 'flex';
        return msg.innerHTML = 'Altura invalida';
    };

    form.style.display = 'none'
    tabelaIMC.style.display = 'flex'
    const imc = inputPeso / (inputAltura ** 2);

    return imc.toFixed(2);
}

const retorno = () => {
    form.style.display = 'flex'
    msg.style.display = 'none';
    tabelaIMC.style.display = 'none'
    peso.value = '';
    altura.value = '';
    peso.focus();
}

bntRetorn.addEventListener('click', retorno)

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validation();
    if(imcCalc()){
        msg.style.display = 'flex';
    };
});