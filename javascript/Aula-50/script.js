
function rand(min = 0, max = 3) {
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

// esperaAi('Fase 1', rand())
//     .then(reposta => {
//         console.log(reposta)
//         return esperaAi('Fase 2', rand())
//     })
//     .then(resposta => {
//         console.log(resposta)
//         return esperaAi('Fase 3', rand())
//     })
//     .then(resposta => {
//         console.log(resposta)
//         return resposta
//     })
//     .then(resposta => {
//         console.log('Terminamos na fase:', resposta)
//     })
//     .catch(e => console.log(e))

// async function executa() {} modelo normal


const executa = async ()  => { // modelo de arow function
    try {
        
        const fase1 = await esperaAi('Fase 1', 1000);
        console.log(fase1)

        const fase2 = await esperaAi('Fase 2', rand());
        console.log(fase2);
     
        const fase3 = await esperaAi('Fase 3', rand());
        console.log(fase3);
     
        console.log('Terminamos na fase:', fase3)
    
    } catch(e) {
        console.log(e)
    }
}

executa()
console.log('la vai')

// const teste = esperaAi('teste', 3000);
// console.log(teste)

/*
Estados da Promisse => {
    pending => pendente;
    fullFilled => resolvida;
    reject => rejeitado;
} 
*/