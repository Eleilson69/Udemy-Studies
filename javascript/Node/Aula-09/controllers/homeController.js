exports.paginaInicial = (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome: <input type="text" name="id"><br>
            Nome: <input type="text" name="idade"><br>
            <button>Enviar</button>
        </form>
    `);
}

exports.testes = (req, res) => {
    res.send(req.params);
    console.log(req.params)
}

exports.posts = (req, res) => {
    res.send(req.body);
    console.log(req.body)
}