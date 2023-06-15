const express = require('express')
const dotenv = require('dotenv')
const conn = require('./db')

const session = require('./system/utils/session')
const routes = require('./system/routes/index')

// .env dosyasını okumak için
dotenv.config()

// veritabanına bağlanmak için
conn()

const app = express()
const port = process.env.PORT

// ejs template engine
app.set('view engine', 'ejs')

// static dosyaları kullanmak için middleware
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//session
app.use(session)

// routes
app.use(routes)

app.listen(port, () => {
	console.log(`Servera bağlanıldı: ${port}`)
})