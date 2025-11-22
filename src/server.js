// src/server.js
const express = require('express');
const cors = require('cors');
const path = require('path');
const { createWallet } = require('./walletService');

const app = express();
const PORT = process.env.PORT || 3000;

// habilita CORS (útil se futuramente o front estiver em outro domínio)
app.use(cors());

// servir arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, '..', 'public')));

// endpoint para criar carteira
app.get('/api/create-wallet', (req, res) => {
  try {
    const wallet = createWallet();
    res.json(wallet);
  } catch (err) {
    console.error('Erro ao criar carteira:', err);
    res.status(500).json({ error: 'Erro ao criar carteira' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
