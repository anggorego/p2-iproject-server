const express = require('express')
const threadRouter = express.Router();
const threadController = require("../controllers/threadController")
const authentication = require("../middlewares/authentication")
const authorization = require("../middlewares/authorization"
)
threadRouter.use(authentication)
threadRouter.get('/', threadController.getThreads)
threadRouter.get('/byuser' , threadController.getThreadsByUser)
threadRouter.get('/:id', threadController.getThreadById)
threadRouter.post('/', threadController.postThread)
threadRouter.put('/:id', authorization,threadController.updateThread)
threadRouter.delete('/:id', authorization, threadController.deleteThread)

module.exports = threadRouter