const customExpress = require('./config/customExpress')
const connection = require('./infra/connection')
const tables = require('./infra/tables')

connection.connect((erro) => {
    if(erro) {
        console.log(erro)
    } else {
        console.log('[Start Connection]')

        tables.init(connection)
        const app = customExpress()
        app.listen(3000, () => console.log('[Server running - 3000]'))
    }
})


