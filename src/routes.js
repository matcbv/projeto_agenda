const express = require('express')

const route = express.Router()
const homeController = require('./controllers/homeController')
const loginController = require('./controllers/loginController')
const contactController = require('./controllers/contactController')
const { loginRequired } = require('../src/middlewares/middlewares')

// A páginal inical de toda rota, chama-se index. Esse nome pode ser omitido ou não. Ex.:
// route.get('/', index) = route.get('/index', index) 
route.get('/', homeController.index)
// Rota para acessar a página de login do usuário:
route.get('/signin', loginController.signin)
// Rota para logar o usuário no sistema
route.post('/signin/login', loginController.login)
// Rota para o logout do usuário:
route.get('/signin/logout', loginController.logout)
// Rota para acessar a página de criação de conta:
route.get('/signup', loginController.signup)
// Rota para registrar o usuário no banco de dados:
route.post('/signup/register', loginController.register)
// Rota para registrar o usuário no banco de dados:
route.get('/contact', loginRequired, contactController.index)
// Rota para cadastrar um contato no bando de dados:
route.post('/contact/register', contactController.register)
// Rota para página de edição de determinado contato:
route.get('/contact/:id', contactController.editIndex)
// Rota para editar um contato:
route.post('/contact/edit/:id', contactController.edit)
// Rota para deletar um contato do banco de dados:
route.post('/contact/delete/:id', contactController.delete)

module.exports = route
