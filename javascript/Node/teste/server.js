const express = require('express');
const app = express();
const routes = require('./routes')
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, 'public')));

app.use(routes);

app.listen(21262, () => {
    console.log('server ativado http://localhost:21262');
    console.log('Servidor rodando na porta 21262');
})