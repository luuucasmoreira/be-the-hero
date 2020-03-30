const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**metodos http
 * get: buscar/listar uma informação do back
 * post: criar uma informação no back
 * put: alterar uma informação no back
 * delete: deletar uma informação no back
 * 
 * tipos de parametro - 
 * Query: Filtros no parametros
 */



app.listen(3333);
