const Contact = require('../models/ContactModel')

exports.index = (req, res) => {
    // Estaremos passando uma chave vazia para a variável contact para que, ao criarmos um novo contato, um erro de contact is not defined não seja levantado.
    return res.render('contact', {contact: {}})
}

exports.register = async (req, res) => {
    try {
        const contact = new Contact(req.body)
        await contact.register()
        if (contact.nameErrors.length > 0) {
            req.flash('nameErrors', contact.nameErrors)
            return req.session.save(() => res.redirect('/contact'))
        }
        if (contact.emailErrors.length > 0) {
            req.flash('emailErrors', contact.emailErrors)
            return req.session.save(() => res.redirect('/contact'))
        }
        req.flash('successMessages', 'Contato cadastrado com sucesso!')
        // Abaixo, iremps redirecionar nossa aplicação para um contato específico. Nesse caso, o que foi cadastrado anteriormente. Isso é feito passando uma rota dinâmica através de uma template string:
        return req.session.save(() => res.redirect(`/contact/${contact.contact._id}`))
    } catch(e) {
        console.log(e)
        return res.render('error404')
    }
}

exports.editIndex = async (req, res) => {
    // Caso o usuário não esteja logado, iremos redirecioná-lo para a página de login:
    if (!req.session.user) return res.render('signin')
    // Para obtermos o usuário, iremos utilizar o método estático getContactById(), passando o id contido na URL através da propriedade params.
    const contact = await Contact.getContactById(req.params.id)
    if (!contact) return res.render('error404')
    // Caso nosso usuário seja obtido com sucesso, iremos rederizar nossa página de contato, passando um objeto como segundo parâmetro, onde as chaves desse objeto se tornam variáveis disponíveis para uso dentro do template renderizado.
    res.render('contact', {contact})
}

exports.edit = async (req, res) => {
    try {
        if (!req.session.user) return res.render('signin')
        if (!req.params.id) {return res.render('error404')}
        const contact = new Contact(req.body)
        await contact.edit(req.params.id)
        if (contact.nameErrors.length > 0) {
            req.flash('nameErrors', contact.nameErrors)
            return req.session.save(() => res.redirect('/contact'))
        }
        if (contact.emailErrors.length > 0) {
            req.flash('emailErrors', contact.emailErrors)
            return req.session.save(() => res.redirect('/contact'))
        }
        req.flash('successMessages', 'Contato editado com sucesso!')
        return req.session.save(() => res.redirect(`/contact/${contact.contact._id}`))
    } catch(e) {
        console.log(e)
        return res.render('error404')
    }
}

exports.delete = async (req, res) => {
    if (!req.session.user) return res.render('signin')
    if(!req.params.id) return res.render('error404')
    const contato = await Contact.delete(req.params.id)
    if (!contato) return res.render('error404')

    req.flash('successMessages', 'Contato deletado com sucesso!')
    return req.session.save(() => res.redirect(`/`))
} 
