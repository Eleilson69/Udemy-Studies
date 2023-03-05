import GeraCPF from './modules/GeraCPF';

import './assets/css/style.css';

(function(){
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    for( let i = 0; i < 10; i++){
        cpfGerado.innerHTML += `<strong>CPF Gerado</strong> ${i}: <strong id="cpf">${gera.geraNovoCPF()}</strong> <br>`;
    }
   
})();