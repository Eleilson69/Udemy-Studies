
exports.paginaInicial = (req, res, next) => {
    res.render('index', {
        titulo: 'Este será o titulo da pagina',
        numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    });
    return
}

exports.testes = (req, res) => {
    res.send(req.params);
    console.log(req.params)
}

exports.posts = (req, res) => {
    res.send(req.body);
    console.log(req.body);
}