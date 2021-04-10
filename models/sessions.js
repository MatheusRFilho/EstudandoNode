const connection = require('../infra/connection')

class Sessions {
    create(session) {
        // console.log(session.client);
        const sql = 'INSERT INTO Session SET ?'
        connection.query(sql, session, (error, result) => {
            if (error) {
                console.log(error)
            } else {
                console.log(result)
            }
        })
    }
}

module.exports = new Sessions