const express = require('express')
const loginRouter = express.Router();
const loginContoller = require("../controllers/loginController")

loginRouter.post('/', loginContoller.postLogin)
module.exports = loginRouter