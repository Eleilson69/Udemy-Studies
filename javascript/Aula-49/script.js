function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject('CAI NO ERRO');
                return;
            }
            resolve(msg.toUpperCase() + ' - passei pela promisse');
            return;
        }, tempo);

    })
}

function baixaPagina() {
    const emCache = true;

    if(emCache) {
    //   return Promise.resolve('Pagina em cache').;
      return Promise.reject('Pagina em cache');
    } else {
        return esperaAi('Baixei a pagina', 2000)
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina)
    })
    .catch(erro => {
        console.log('Erro:', erro)
    });










// Promisse.all Promisse.race Promisse.resolve Promisse.reject 
// const promisses = [
//     esperaAi(1000, rand(1, 5)),
//     esperaAi('Promisse 1', rand(1, 5)),
//     esperaAi('Promisse 2', rand(1, 5)),
//     esperaAi('Promisse 3', rand(1, 5)),
// ];

// Promise.race(promisses)
//     .then(function(valor){
//         console.log(valor)
//     })
//     .catch(function(erro){
//         console.log(erro)
//     })

// Promise.all(promisses)
//     .then(function(valor){
//         console.log(valor)
//     })
//     .catch(function(erro){
//         console.log(erro)
//     })