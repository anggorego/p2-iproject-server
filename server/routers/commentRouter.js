const express = require('express')
const commentRouter = express.Router();
const authentication = require("../middlewares/authentication")
const commentController = require("../controllers/commentController")
commentRouter.use(authentication)
commentRouter.get('/:threadid', commentController.getComments)
commentRouter.post('/:threadid', commentController.postComment)
commentRouter.delete('/:threadid/:id', commentController.deleteComment)
module.exports = commentRouter