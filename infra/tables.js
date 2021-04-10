class Tables {
    init(connection) {
        this.connection = connection

        this.createSessions();
    }

    createSessions() {
        const sql = 'CREATE TABLE IF NOT EXISTS Session (id int NOT NULL AUTO_INCREMENT, client varchar(50) NOT NULL, pet varchar(20), service varchar(20) NOT NULL, status varchar(20) NOT NULL, obs text, PRIMARY KEY(ID) )'
        this.connection.query(sql, (error) => {
            if (error) {
                console.log(error)
            } else {
                console.log('[Creating Session Table]')
            }
        })
    }
}

module.exports = new Tables