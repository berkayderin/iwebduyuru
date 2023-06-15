const express = require('express')
const router = express()

const publicRoutes = require('./publicRoutes')
const privateRoutes = require('./privateRoutes')
const sessionMiddleware = require('../middlewares/sessionMiddleware')

router.use(publicRoutes)
router.use(sessionMiddleware)
router.use(privateRoutes)

module.exports = router
