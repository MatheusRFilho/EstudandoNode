const moment = require('moment')

const connection = require('../infra/connection')

class Sessions {
    create(session) {
        const createdDate = moment().format('YYYY-MM-DD HH:MM:SS')
        const date = moment(session.date, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        const sessionWithDate = {...session, createdDate, date}
        const sql = 'INSERT INTO Session SET ?'
        connection.query(sql, sessionWithDate, (error, result) => {
            if (error) {
                console.log(error)
            } else {
                console.log(result)
                console.log('[Insert in Session]')
            }
        })
    }
}

module.exports = new Sessions