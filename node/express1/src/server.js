const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public')); // Servir arquivos estáticos da pasta 'public'

app.post('/submit', (req, res) => {
  const formData = req.body;
  console.log('Dados recebidos:', formData);
  res.json({ message: 'Dados recebidos com sucesso!', formData });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
