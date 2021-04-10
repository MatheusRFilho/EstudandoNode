const customExpress = require('./config/customExpress')
const connection = require('./infra/connection')


connection.connect((erro) => {
    if(erro) {
        console.log(erro)
    } else {
        console.log('[Start Connection]')
        const app = customExpress();
        app.listen(3000, () => console.log('[Server running - 3000]'))
    }
})


