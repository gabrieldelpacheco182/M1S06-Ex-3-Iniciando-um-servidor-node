const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Sendo perseverante chegarei até o final do curso, lutarei para sair com o certificado ');
});

app.listen(1987, () => {
  console.log('Servidor iniciado na porta 1987!');
});
