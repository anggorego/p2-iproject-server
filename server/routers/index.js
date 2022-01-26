const express = require('express')
const indexRouter = express.Router();
const loginRouter = require("./loginRouter")
const registerRouter = require("./registerRouter")
const threadRouter = require("./threadRouter")
const commentRouter = require("./commentRouter")
const bmrRouter = require("./bmrRouter")
const userRouter = require("./userRouter")


indexRouter.use('/register' ,registerRouter)
indexRouter.use('/login', loginRouter)
indexRouter.use('/threads' , threadRouter)
indexRouter.use('/comments', commentRouter)
indexRouter.use('/bmr', bmrRouter)
indexRouter.use('/user', userRouter)


module.exports = indexRouter