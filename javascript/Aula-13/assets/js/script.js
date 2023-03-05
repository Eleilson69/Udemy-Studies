const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p')

const estilosBody = getComputedStyle(document.body);
const backgroundColor = estilosBody.backgroundColor;

for (let p of ps) {
    p.style.background = backgroundColor;
    p.style.color = 'red';
    p.style.margin = '10px'
}