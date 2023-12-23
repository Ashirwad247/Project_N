const {Router} = require('express')
const { users_home } = require('../controller/authController')
const uHRouter = Router()
uHRouter.get('/user', users_home)
module.exports = uHRouter