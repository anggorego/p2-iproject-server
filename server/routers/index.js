const express = require('express')
const indexRouter = express.Router();
const loginRouter = require("./loginRouter")
const registerRouter = require("./registerRouter")
const threadRouter = require("./threadRouter")
const commentRouter = require("./commentRouter")

indexRouter.use('/register' ,registerRouter)
indexRouter.use('/login', loginRouter)
indexRouter.use('/threads' , threadRouter)
indexRouter.use('/comments', commentRouter)


module.exports = indexRouter