const Sessions = require('../models/sessions')

module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Você esta na rota de atendimentos GET'))

    app.post('/atendimentos', (req, res) => {
        const session = req.body

        Sessions.create(session)
        res.status(201).send('Atendimento criado com sucesso')
    })
}