const request = (obj) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();
        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText + ' ' + 'Página não encontrada');
            }
        })
    })
   
}

document.addEventListener('click', (e) => {
    const el = e.target;
    const tag = el.tagName.toLowerCase() ;

    if(tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
})

async function carregaPagina(el) {
    const href = el.getAttribute('href');
    console.log(href);

    const objConfig = {
        method: 'GET',
        url: href,
    };

    try{
        const response = await request(objConfig);
        carregaResultado(response);
    }catch(error) {
        console.log(error);
    }
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}





// codigo abaixo baseado em funções de callback 

// const request = (obj) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(obj.method, obj.url, true);
//     xhr.send();
//     xhr.addEventListener('load', () => {
//         if(xhr.status >= 200 && xhr.status < 300) {
//             obj.success(xhr.responseText)
//         } else {
//             obj.error(xhr.statusText);
//         }
//     })
// }

// document.addEventListener('click', (e) => {
//     const el = e.target;
//     const tag = el.tagName.toLowerCase() ;

//     if(tag === 'a') {
//         e.preventDefault();
//         carregaPagina(el);
//     }
// })

// function carregaPagina(el) {
//     const href = el.getAttribute('href');
//     console.log(href);

//     const objConfig = {
//         method: 'GET',
//         url: href,
//         success(request){
//             carregaResultado(request);
//         },
//         error(errorText){
//             console.log(errorText);
//         }
//     };

//     request(objConfig);
// }

// function carregaResultado(response) {
//     const resultado = document.querySelector('.resultado');
//     resultado.innerHTML = response;
// }