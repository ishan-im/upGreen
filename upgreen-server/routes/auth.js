const express = require('express')
const router = express.Router()

const middleware = require('../validation/middleware')


const auth = require("../controller/auth");


// get user data

router.get('/users', auth.getAllUser)

router.get('/user/:id',  auth.getUser)



module.exports = router