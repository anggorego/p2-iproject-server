const express = require('express')
const threadRouter = express.Router();
const threadController = require("../controllers/threadController")
const authentication = require("../middlewares/authentication")
const authorization = require("../middlewares/authorization"
)
threadRouter.use(authentication)
threadRouter.get('/', threadController.getThreads)
threadRouter.get('/:id', threadController.getThreadById)
threadRouter.post('/', threadController.postThread)
threadRouter.put('/:id', authorization,threadController.updateThread)
threadRouter.delete('/:id', authorization, threadController.deleteThread)
threadRouter.get('/byuser' , threadController.getThreadsByUser)

module.exports = threadRouter