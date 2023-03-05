exports.paginaInicial = (req, res) => {
    res.render('index')
}

exports.testes = (req, res) => {
    res.send(req.params);
    console.log(req.params)
}

exports.posts = (req, res) => {
    res.send(req.body);
    console.log(req.body)
}