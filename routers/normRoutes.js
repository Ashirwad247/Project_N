const {Router} = require('express')
const { signup_get, resgister_get, login_get, post_register, login_post, log_out} = require('../controller/authController')
const router = Router()

router.get('/signup', signup_get)
router.get('/register', resgister_get)
router.get('/login', login_get)
router.get('/logout', log_out)
router.post('/register', post_register)
router.post('/login', login_post)
module.exports = router