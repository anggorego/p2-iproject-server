const express = require('express')
const userRouter = express.Router();
const authentication = require("../middlewares/authentication")
const userController = require("../controllers/userController")
userRouter.use(authentication)
userRouter.get('/', userController.getUser)
module.exports = userRouter