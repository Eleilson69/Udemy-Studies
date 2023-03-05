const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome: <input type="text" name="Nome">
            <button>Enviar</button>
        </form>
    `);
});

app.post('/', (req, res) => {
    res.send(`recebi o formulario`);
});

app.get('/contatos', (req, res) => {
    res.send('bem vindo a pagina');
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log(`Server rodando na porta 3000`)
})