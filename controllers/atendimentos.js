const Sessions = require('../models/sessions')

module.exports = app => {
    app.get('/atendimentos', (req, res) => {
        Sessions.index(res)
    })

    app.get('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Sessions.selectOne(res, id)
    })

    app.post('/atendimentos', (req, res) => {
        const session = req.body

        Sessions.create(session, res)
    })

    app.patch('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const values = req.body

        Sessions.update(res, id, values)
    })

    app.delete('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Sessions.delete(res, id)
    })
}