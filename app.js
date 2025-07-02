const express = require('express');
const app = express();
const port = 8000

app.get('/', (req, res) => {
  res.send('Olá mundo Puta que o paril, me livrei da maldição')}
  );

app.listen(port, () => {
  console.log(`Servidor escutando na porta  ${port}`)
});

