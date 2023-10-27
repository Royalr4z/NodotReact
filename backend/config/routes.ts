const admin = require('./admin')

module.exports = (app :any) => {
    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.auth.signin)
    app.post('/validateToken', app.api.auth.validateToken)

    app.route('/users')
        .all(app.config.passport.authenticate())
        .post(admin(app.api.user.save))
        .get(admin(app.api.user.get))

    app.route('/users/:id')
        .put(app.config.passport.authenticate())
        .delete(app.config.passport.authenticate())
        .put(admin(app.api.user.save))
        .get(app.api.user.getById)
        .delete(admin(app.api.user.remove))

    app.route('/freeQuote')
        .get(app.config.passport.authenticate())
        .post(app.api.freeQuote.save)
        .get(admin(app.api.freeQuote.get))

    app.route('/freeQuote/:id')
        .all(app.config.passport.authenticate())
        .put(admin(app.api.freeQuote.save))
        .get(admin(app.api.freeQuote.getById))
        .delete(admin(app.api.freeQuote.remove))
          
    app.route('/Blogs')
        .post(app.config.passport.authenticate())
        .get(app.api.blogs.get)
        .post(admin(app.api.blogs.save))

    app.route('/Blogs/Orderby')
        .get(app.api.blogs.getOrderBy)

    app.route('/Blogs/category')
        .get(app.api.blogs.getByCategory)

    app.route('/blogs/:id')
        .put(app.config.passport.authenticate())
        .delete(app.config.passport.authenticate())
        .put(admin(app.api.blogs.save))
        .get(app.api.blogs.getById)
        .delete(admin(app.api.blogs.remove))
        
    app.route('/message')
        .get(app.config.passport.authenticate())
        .post(app.api.message.save)
        .get(admin(app.api.message.get))

    app.route('/category')
        .post(app.config.passport.authenticate())
        .post(admin(app.api.category.save))
        .get(app.api.category.get)

    app.route('/category/:id')
        .put(app.config.passport.authenticate())
        .delete(app.config.passport.authenticate())
        .put(admin(app.api.category.save))
        .get(app.api.category.getById)
        .delete(admin(app.api.category.remove))

    
}