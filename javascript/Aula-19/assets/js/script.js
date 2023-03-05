
const hr = document.querySelector('#hr');

const criaHoraDosSegundos = (segundos) => {
    let data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
};

let segundos = 0;
let timer;
const iniciaRelogio = () => {
    timer = setInterval(() => {
        segundos++;
        hr.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000)
}

document.addEventListener('click', (e) => {
    const el = e.target;
    if(el.classList.contains('iniciar')){
        clearInterval(timer);
        iniciaRelogio();
        hr.classList.remove('pausado')
    }
    if(el.classList.contains('pausar')){
        clearInterval(timer);
        if (segundos !== 0){
            hr.classList.add('pausado')
        }
    }
    if(el.classList.contains('zerar')){
       clearInterval(timer);
        hr.innerHTML = '00:00:00'
        hr.classList.remove('pausado')
        segundos = 0;
    }
});
