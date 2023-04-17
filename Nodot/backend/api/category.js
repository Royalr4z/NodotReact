module.exports = app => {
    const { existsOrError, notExistsOrError } = app.api.validation

    const save = async (req, res) => {
        const category = {
            id: req.body.id,
            name: req.body.name,
            subtitle: req.body.subtitle,
        }
        try {
            
            existsOrError(category.name, 'Nome não informado')
            existsOrError(category.subtitle, 'Coloque a descrição')

        } catch(msg) {
            return res.status(400).send(msg)
        }

        if(category.id) {
            app.db('category')
                .update(category)
                .where({ id: category.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('category')
                .insert(category)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const get = (req, res) => {
        app.db('category')
            .select('id', 'name', 'subtitle')
            .then(msg => res.json(msg))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('category')
            .select('id', 'name', 'subtitle')
            .where({ id: req.params.id })
            .first()
            .then(msg => res.json(msg))
            .catch(err => res.status(500).send(err))
    }

    const remove = async (req, res) => {
        try {
            existsOrError(req.params.id, 'Código da não informado.')

            const blogs = await app.db('blogs')
                .where({ categoryId: req.params.id })
            notExistsOrError(blogs, 'Categoria possui Blogs.')

            const rowsUpdated = await app.db('category')
                .where({ id: req.params.id })
                .del()
            existsOrError(rowsUpdated, 'Categoria não foi encontrado.')

            res.status(204).send()
        } catch(msg) {
            res.status(400).send(msg)
        }
    }

    return { save, get, getById, remove }
}