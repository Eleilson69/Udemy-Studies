const valor = Number(prompt('Digite um numero'));
const numberTilte = document.querySelector('#number-tilte');
const numberRaiz = document.querySelector('#number-raiz');
const numberInteiro = document.querySelector('#number-inteiro');
const numberInteiroValor = document.querySelector('#number-inteiro-Valor');
const numberIsNaN = document.querySelector('#number-isNaN');
const numberParaBaixo = document.querySelector('#number-paraBaixo');
const numberParaCima = document.querySelector('#number-paracima');
const numberDuasCasasDecimais = document.querySelector('#number-DuasCasasDecimais');

numberTilte.innerHTML = valor;
numberRaiz.innerHTML = valor ** 0.5;
numberInteiro.innerHTML = valor;
numberInteiroValor.innerHTML =  Number.isInteger(valor);
numberIsNaN.innerHTML = Number.isNaN(valor);
numberParaBaixo.innerHTML = Math.floor(valor);
numberParaCima.innerHTML = Math.ceil(valor);
numberDuasCasasDecimais.innerHTML = valor.toFixed(2);
