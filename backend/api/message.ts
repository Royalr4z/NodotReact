module.exports = (app :any) => {
    const { existsOrError, notExistsOrError, equalsOrError, validateEmail } = app.api.validation

    const save = async (req :any, res :any) => {
        const message = {
            id: req.body.id,
            name: req.body.name,
            email: req.body.email,
            subject: req.body.subject,
            content: req.body.content,
        }
        try {
                
            existsOrError(message.name, 'Nome não informado')
            existsOrError(message.email, 'E-mail não informado')
            existsOrError(message.subject, 'Informe o Assunto')
            existsOrError(message.content, 'Mande sua mensagem')

            validateEmail(message.email, 'E-mail Inválido!')

        } catch(msg) {
            return res.status(400).send(msg)
        }

        app.db('message')
                .insert(message)
                .then((_ :any) => res.status(204).send(_))
                .catch((err :any) => res.status(500).send(err))
    }

    const get = (req :any, res :any) => {
        app.db('message')
            .select('id','date' ,'name', 'email', 'subject', 'content')
            .then((msg :any) => res.json(msg))
            .catch((err :any) => res.status(500).send(err))
    }

    const getById = (req :any, res :any) => {
        app.db('message')
            .select('id', 'date', 'name', 'email', 'subject', 'content')
            .where({ id: req.params.id })
            .first()
            .then((msg :any) => res.json(msg))
            .catch((err :any) => res.status(500).send(err))
    }

    const remove = async (req :any, res :any) => {
        try {
            existsOrError(req.params.id, 'Código da não informado.')

            res.status(204).send()
        } catch(msg) {
            res.status(400).send(msg)
        }
    }

    return { save, get, getById, remove }
}