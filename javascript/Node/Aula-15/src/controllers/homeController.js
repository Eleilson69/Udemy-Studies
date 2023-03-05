
exports.paginaInicial = (req, res, next) => {
    // req.flash('info', 'olá Mundo');
    // req.flash('error', 'asdggjkl');
    // req.flash('sucess', 'Blasssss');
    // console.log(req.flash('info'), req.flash('error'), req.flash('sucess'),)
    res.render('index');
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