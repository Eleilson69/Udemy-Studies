const pessoas = [
    {id: 3, nome: 'luiz'},
    {id: 2, nome: 'MAria'},
    {id: 1, nome: 'Helena'},
];

// const novasPessoas = {};
// for (const pessoa of pessoas) {
//     const {id} = pessoa;
//     novasPessoas[id] = {...pessoa}
// }

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const {id} = pessoa;
    novasPessoas.set(id, {...pessoa});
}

// for (const [identfier, {id, nome}] of novasPessoas){
//     console.log(identfier, id, nome)
// }

for (const pessoa of novasPessoas.values()){
    console.log(pessoa)
}

console.log(novasPessoas);