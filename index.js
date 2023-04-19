const express = require('express');
const app = express();

app.get('/', (request, response) => {
  request.send('Sendo perseverante chegarei até o final do curso, lutarei para sair com o certificado ');
});

app.get('/api/:nome', (request, response) => {
    const nome = request.params.nome;
    console.log(`Rota de API criada pelo(a): ${nome}`);
    res.send(`Olá, ${nome}!`);
  });

app.listen(1987, () => {
  console.log('Servidor iniciado na porta 1987!');
});

app.use(express.json());

app.post('/api/objeto', (request, response) => {
  const objeto = request.body;
  console.log('Objeto recebido:', objeto);
  response.json(objeto);
});

