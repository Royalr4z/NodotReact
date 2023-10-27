const bcrypt = require('bcrypt-nodejs')

module.exports = (app :any) => {
    const { existsOrError, notExistsOrError, equalsOrError, validateEmail} = app.api.validation

    const encryptPassword = (password :any) => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }

    const save = async (req :any, res :any) => {
        const user = { ...req.body }
        if(req.params.id) user.id = req.params.id

        if(!req.originalUrl.startsWith('/users')) user.admin = false
        if(!req.user || !req.user.admin) user.admin = false

        try {
            existsOrError(user.name, 'Nome não informado')
            existsOrError(user.email, 'E-mail não informado')
            existsOrError(user.password, 'Senha não informada')
            existsOrError(user.confirmPassword, 
                'Confirme sua Senha')
            equalsOrError(user.password, user.confirmPassword,
                'Senhas não conferem')
            validateEmail(user.email, 'E-mail Inválido!')
            
            const userFromDB = await app.db('users')
                .where({ email: user.email }).first()
            if(!user.id) {
                notExistsOrError(userFromDB, 'Usuário já cadastrado')
            }
        } catch(msg) {
            return res.status(400).send(msg)
        }

        user.password = encryptPassword(user.password)
        delete user.confirmPassword

        if(user.id) {
            app.db('users')
                .update(user)
                .where({ id: user.id })
                .whereNull('deletedAt')
                .then((_ :any) => res.status(204).send())
                .catch((err :any) => res.status(500).send(err))
        } else {
            app.db('users')
                .insert(user)
                .then((_ :any) => res.status(204).send())
                .catch((err :any) => res.status(500).send(err))
        }
    }

    const get = (req :any, res :any) => {
        app.db('users')
            .select('id', 'name', 'email', 'admin')
            .then((users :any) => res.json(users))
            .catch((err :any) => res.status(500).send(err))
    }

    const getById = (req :any, res :any) => {
        app.db('users')
            .select('id', 'name', 'email', 'admin')
            .where({ id: req.params.id })
            .first()
            .then((user :any) => res.json(user))
            .catch((err :any) => res.status(500).send(err))
    }

    const remove = async (req :any, res :any) => {
        try {
            const blogs = await app.db('blogs')
                .where({ userId: req.params.id })
            notExistsOrError(blogs, 'Usuário possui Blogs.')

            const rowsUpdated = await app.db('users')
                .where({ id: req.params.id })
                .del()
            existsOrError(rowsUpdated, 'Usuário não foi encontrado.')

            res.status(204).send()
        } catch(msg) {
            res.status(400).send(msg)
        }
    }

    return { save, get, getById, remove }
}