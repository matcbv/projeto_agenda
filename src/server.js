const path = require('path')
const envPath = path.resolve(__dirname, '..', '.env')
require('dotenv').config({path: envPath})

const express = require('express')
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.resolve(__dirname, '..', 'public')))

const mongoose = require('mongoose')
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit('ready');
    }).catch(e => {
        console.log(e)
    })

let randomSecret = ''
for (let i = 0; i <= 60; i++) {
    const randInt = Math.floor(Math.random() * 95) + 32
    randomSecret += String.fromCharCode(randInt) 
}

const session = require('express-session')
const MongoStore = require('connect-mongo')
const sessionOptions = session({
    secret: randomSecret,
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
})

app.use(sessionOptions)

const flash = require('connect-flash')
app.use(flash())

const helmet = require('helmet')
app.use(helmet())

// const cookieParser = require('cookie-parser')
// app.use(cookieParser())

const csrf = require('csurf')
app.use(csrf())

// Os middlewares globais são executados em toda requisição feita na aplicação, seja ela GET, POST, PUT, DELETE, etc.
const { csrfMiddleware, checkCsrfError, globalMiddleware } = require('./middlewares/middlewares')
app.use(csrfMiddleware)
app.use(checkCsrfError)
app.use(globalMiddleware)

app.set('views', path.resolve(__dirname, 'views'))
app.set('view engine', 'ejs')

// Obs.: A aplicação das rotas devem vir após os middlewares globais, para que possam obter qualquer informação necessária para a aplicação das rotas.
const routes = require('./routes')
app.use(routes)

app.on('ready', () => {
    app.listen(process.env.SERVERPORT, () => {
        console.log(`Servidor acessado com sucesso na porta ${process.env.SERVERPORT}`)
    })
})
