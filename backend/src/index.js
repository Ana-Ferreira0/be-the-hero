const express = require('express'); // importando o módulo express(pacote) para dentro da variável express
const cors = require('cors');
const routes = require('./routes'); // importando as rotas(arquivo)

const app = express(); // armazena a aplicação

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

