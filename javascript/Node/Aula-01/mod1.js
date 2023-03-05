const nome = 'Elleylson';
const sobrenome = 'santtos';
const idade = 23;

const falaNome = () => {
    console.log(nome, sobrenome);
};

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.idade = idade;

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.idade = idade;
exports.falaNome = falaNome;
