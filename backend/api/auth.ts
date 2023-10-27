const { authSecret } = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')

module.exports = (app :any) => {

    const signin = async (req :any, res :any) => {

        if (!req.body.email) {
            return res.status(400).send('Email não Informado!')
        } if (!req.body.password) {
            return res.status(400).send('Senha não Informada!')
        }

        const user = await app.db('users')
            .where({ email: req.body.email })
            .first()

        if (!user) return res.status(400).send('Usuário inexistente.')

        const isMatch = bcrypt.compareSync(req.body.password, user.password)
        if (!isMatch) return res.status(401).send('Senha incorreta.')

        const now = Math.floor(Date.now() / 1000)

        const payload = {
            id: user.id,
            name: user.name,
            email: user.email,
            admin: user.admin,
            iat: now,
            exp: now + (60 * 60 * 24 * 3)
        }

        if (payload.admin === false) {
            return res.status(401).send('Acesso negado.')
        }

        res.json({
            ...payload,
            token: jwt.encode(payload, authSecret),
        }) 

    }

    const validateToken = async (req :any, res :any) => {
        const userData = req.body || null
        try {
            if(userData) {
                const token = jwt.decode(userData.token, authSecret)
                if(new Date(token.exp * 1000) > new Date()) {
                    return res.send(true)
                }
            }
        } catch(e) {
            return res.status(400).send(e)
        }

        res.send(false)
    }

    return { signin, validateToken }
}