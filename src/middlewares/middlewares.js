exports.checkCsrfError = (err, req, res, next) => {
    if (err){
        console.log(err)
        return res.render('error404')
    }
    next()
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    next()
}

exports.globalMiddleware = (req, res, next) => {
    // Tornando disponíveis através de locals, as mensagens flash para exibirmos em nossas views:
    res.locals.errorMessages = req.flash('errorMessages')
    res.locals.successMessages = req.flash('successMessages')
    res.locals.emailErrors = req.flash('emailErrors')
    res.locals.passwordErrors = req.flash('passwordErrors')
    res.locals.nameErrors = req.flash('nameErrors')
    res.locals.user = req.session.user
    next()
}

exports.loginRequired = (req, res, next) => {
    if (!req.session.user) {
        req.flash('errorMessages', 'Realize o login ou crie uma conta para cadastrar novos contatos.')
        res.redirect('/signin')
        return
    }
    next()
}
