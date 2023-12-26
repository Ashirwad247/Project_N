const {Router} = require('express')
const { users_home } = require('../controller/authController')
const { requireAuth } = require('../middleware/authMware')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')

const uHRouter = Router()
uHRouter.get('/user', requireAuth, users_home)
module.exports = uHRouter