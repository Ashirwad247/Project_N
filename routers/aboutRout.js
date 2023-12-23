const {Router} = require('express')
const { about_func, about_HTM } = require('../controller/authController')
const aboutRout = Router()

aboutRout.get('/about.html', about_HTM)

aboutRout.get('/about',about_func)

module.exports = aboutRout
