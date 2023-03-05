const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

// Url ( /profiles/12345 )
// queryString ( ?campanha=googleads )
// mais uma queryString vinculada ao fim da primeira ( &nome_campanha=seila )

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome: <input type="text" name="id">
            Nome: <input type="text" name="idade">
            <button>Enviar</button>
        </form>
    `);
});

app.get('/testes/:idade?/:altura?', (req, res) => {
    // console.log(req.params);
    console.log(req.query);
    res.send(req.query.id)
})

app.post('/', (req, res) => {
    res.send(req.body);
    console.log(req.body)
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log(`Server rodando na porta 3000`)
})