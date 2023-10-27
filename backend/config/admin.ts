module.exports = (middleware :any) => {
    return (req :any, res :any, next :any) => {
        if(req.user.admin) {
            middleware(req, res, next)
        } else {
            res.status(401).send('Usuário não é administrador.')
        }
    }
}