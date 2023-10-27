const app = require('express')()
const consign = require('consign')
const db = require('./config/db')

app.db = db

consign()
    .include('./config/passport.ts')
    .then('./config/middlewares.ts')
    .then('./api/validation.ts')
    .then('./api')
    .then('./config/routes.ts')
    .into(app)

app.listen(4000, () => {
    console.log('Backend executando...')
})
