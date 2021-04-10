const express = require('express');

const app = express()

app.listen(3000, () => console.log('[Server running - 3000]'))

app.get('/atendimentos', (req, res) => res.send('Você esta na rota de atendimentos'))