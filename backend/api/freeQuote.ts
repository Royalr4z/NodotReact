const moment = require('moment-timezone');
const timeZone = 'America/Sao_Paulo';
const dateTimeBrasil = moment().tz(timeZone).format().toString();

module.exports = (app :any) => {
    const { existsOrError, notExistsOrError, equalsOrError, validateEmail } = app.api.validation

    const save = async (req :any, res :any) => {
        const freeQuote = {
            id: req.body.id,
            date: dateTimeBrasil,
            name: req.body.name,
            email: req.body.email,
            service: req.body.service,
            message: req.body.message,
        }
        try {
                
            existsOrError(freeQuote.name, 'Nome não informado')
            existsOrError(freeQuote.email, 'E-mail não informado')
            existsOrError(freeQuote.service, 'Informe o Serviço')
            existsOrError(freeQuote.message, 'Mande sua mensagem')

            validateEmail(freeQuote.email, 'E-mail Inválido!')

        } catch(msg) {
            return res.status(400).send(msg)
        }

        app.db('free_quote')
                .insert(freeQuote)
                .then((_ :any) => res.status(204).send(_))
                .catch((err :any) => res.status(500).send(err))
    }

    const get = (req :any, res :any) => {
        app.db('free_quote')
            .select('id','date' ,'name', 'email', 'service', 'message')
            .then((quote :any) => res.json(quote))
            .catch((err :any) => res.status(500).send(err))
    }

    const getById = (req :any, res :any) => {
        app.db('free_quote')
            .select('id', 'date', 'name', 'email', 'service', 'message')
            .where({ id: req.params.id })
            .first()
            .then((quote :any) => res.json(quote))
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