const rand = (min, max) => {
   return Math.floor(Math.random() * (max - min ) + min);
};

const geraMaiuscula = () => {
    return String.fromCharCode(rand(65, 91));
};

const geraMinuscula = () => {
    return String.fromCharCode(rand(97, 123));
};

const geraNumero = () => {
    return String.fromCharCode(rand(48, 58));
};

const simbolos = '+=(){}[]*&%$#@£|/';

const geraSimbolo = () => {
    return simbolos[rand(0, simbolos.length)];
}

export default function gerSenha(qtd, maiusculas, minuscula, numero, simbolo) {

    const senhaArray = [];
    qtd = Number(qtd);
    
    for(let i = 0; i < qtd; i++){
        maiusculas && senhaArray.push(geraMaiuscula());
        minuscula && senhaArray.push(geraMinuscula());
        numero && senhaArray.push(geraNumero());
        simbolo && senhaArray.push(geraSimbolo());
    }

    return senhaArray.join('').slice(0, qtd);

}