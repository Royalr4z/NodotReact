module.exports = (app :any)  => {
    function existsOrError(value :string, msg :string) {
        if(!value) throw msg
        if(Array.isArray(value) && value.length === 0) throw msg
        if(typeof value === 'string' && !value.trim()) throw msg
    }
    
    function notExistsOrError(value :string, msg :string) {
        try {
            existsOrError(value, msg)
        } catch(msg) {
            return 
        }
        throw msg
    }
    
    function equalsOrError(valueA :string, valueB :string, msg :string) {
        if(valueA !== valueB) throw msg
    }

    function validateEmail(value :string, msg :string) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(value)) {
            throw msg;
        }
    }

    return { existsOrError, notExistsOrError, equalsOrError, validateEmail}
}