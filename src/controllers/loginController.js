// Importando a classe login:
const { Login } = require('../models/LoginModel.js')
const { Register } = require('../models/RegisterModel.js')

// Definindo a rota de login:
exports.signin = (req, res) => {
    return res.render('signin')
}

// Definindo a rota para nova conta:
exports.signup = (req, res) => {
    return res.render('signup')
}

// Definindo a rota para register
exports.register = async (req, res) => {
    try {
        // Criando uma variável para existência de erros:
        let errorExists = false
        // Criando uma instância de login, passando o body da requisição para o construtor da classe:
        const register = new Register(req.body)
        // Chamando o método signup:
        await register.signup()
        if (register.emailErrors.length > 0) {
            req.flash('emailErrors', register.emailErrors)
            errorExists = true
        }
        if (register.passwordErrors.length > 0) {
            req.flash('passwordErrors', register.passwordErrors)
            errorExists = true
        }
        if (errorExists) return req.session.save(() => res.redirect('/signup'))
        // Caso não haja nenhum erro, uma mensagem de sucesso será adicionada:
        req.flash('successMessages', 'Usuário criado com sucesso!')
        
        return req.session.save(() => res.redirect('/signup'))
    } catch(e) {
        console.log(e)
        return res.render('error404')
    }
}

// Definindo a rota para login:
exports.login = async (req, res) => {
    try {
        let errorExists = false
        const login = new Login(req.body)
        await login.signin()
        if (login.emailErrors.length > 0) {
            req.flash('emailErrors', login.emailErrors)
            errorExists = true
        }
        if (login.passwordErrors.length > 0) {
            req.flash('passwordErrors', login.passwordErrors)
            errorExists = true
        }
        if (errorExists) return req.session.save(() => res.redirect('/signin'))
        /*
            Abaixo, estaremos armazenando o usuário obtido consultando o banco de dados do Mongo DB. Estaremos armazenado os dados em nossa sessão que também ficará armazenada no banco de dados do Mongo DB. O usuário estará contido em formato de dicionário em pares chave e valor, dentro do dicionário session. Ex.:

            session: {"user":{"_id":"6673873aca70d88b3e406d17","email":"matheuscbv23@gmail.com","password":"$2a$10$P3lEdvOuYXDrD1m0uNIK4u/ygzp4xjYQj.7J1LvC9jtgeMZkGNDgi","__v":0}}
        */
        req.session.user = login.user
        return req.session.save(() => res.redirect('/'))
    } catch(e) {
        console.log(e)
        return res.render('error404')
    }
}

exports.logout = async (req, res) => {
    req.session.destroy()
    res.redirect('/')
}