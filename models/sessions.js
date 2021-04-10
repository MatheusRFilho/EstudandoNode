const moment = require('moment')

const connection = require('../infra/connection')

class Sessions {
    create(session, res) {
        const createdDate = moment().format('YYYY-MM-DD HH:MM:SS')
        const date = moment(session.date, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')

        const dateIsValid = moment(date).isSameOrAfter(createdDate)
        const clientIsValid = session.client.length >= 5


        const validator = [
            {
                name: 'date',
                valid: dateIsValid,
                mensage: 'Data deve ser maior ou igual a data atual'
            },
            {
                name: 'client',
                valid: clientIsValid,
                mensage: 'Nome deve ser maior ou igual a 5 caracteres'
            },
        ]

        const errors = validator.filter(item => !item.valid)
        const withErrors = errors.length

        if (withErrors) {
            res.status(400).json(errors)
        } else {
            const sessionWithDate = {...session, createdDate, date}
            const sql = 'INSERT INTO Session SET ?'
            connection.query(sql, sessionWithDate, (error, result) => {
                if (error) {
                    console.log(error)
                    res.status(400).json(error)
                } else {
                    res.status(201).json(result)
                }
            })
        }
    }
}

module.exports = new Sessions