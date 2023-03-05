import gerSenha from "./gerdores";
const qtd = document.querySelector('.qtd-caracteres');
const bnt = document.querySelector('.gerar-senha');
const senhaGerada = document.querySelector('.senha-gerada');
const chkMaiusculas = document.querySelector('.chk-maiusculas');
const chkMinusculas = document.querySelector('.chk-minusculas');
const chkNumeros = document.querySelector('.chk-numeros');
const chkSimbolos = document.querySelector('.chk-simbolos');

export default function() {
    bnt.addEventListener('click', () => {
        senhaGerada.innerHTML = gera();
    })
}

function gera() {
    const senha =  gerSenha(
        qtd.value, 
        chkMaiusculas.checked, 
        chkMinusculas.checked, 
        chkSimbolos.checked, 
        chkNumeros.checked
    );

    return senha || 'Nada selecionado';
}


