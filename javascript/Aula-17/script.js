// try {
//     console.log(naoExiste)
// } catch (err) {
//     console.log('naoExiste')
// }
const soma = (x, y) => {
    if (typeof x !== 'number' || typeof y !== 'number') {
        // transforma uma meansagem em formato de erro
        throw new TypeError('x e y presisam ser numeros');
    };
    return x + y;
};
try {
    // executado quando não tem erros
    console.log(soma(1, 3));
    console.log(soma('1', 3));
} catch (err) {
    // executado quando tem erros
    console.log(err);
} finally {
    // sempre sera executado
    console.log('sempre sera executado');
}