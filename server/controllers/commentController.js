const { Comment, Thread,User} = require("../models")
const sendMail = require("../helpers/nodemailer")
const getComments = async (req,res,next)=>{
  const threadId = req.params.threadid
  try{
    const comments = await Comment.findAll({
      where:{
        threadId:threadId
      }
    })
    res.status(200).json(comments)
  }catch(err){

  }
}

const postComment = async (req,res,next)=>{
  const userId = req.currentUser.id
  const threadId = req.params.threadid
  const {description} = req.body
  try{
    const comment = await Comment.create({description,threadId,userId})
    if(comment){
      const thread = await Thread.findOne({
        where:{id:threadId},
        include:{
          model:User
        }
      });
      if(thread){
        sendMail(thread.User.email,thread.title,comment.description)
      }
    }
    res.status(201).json(comment)
    
  }catch(err){
    next(err)
  }
}

const deleteComment = async(req,res,next)=>{

  const threadId = req.params.threadid
  const id = req.params.id
  try{
    const thread = await Thread.findOne({
      where:{
        id:threadId
    }})
    if(thread){
      const comment = await Comment.findOne({
        where:{
          id:id
        }
      })
      if(comment){
        await Comment.destroy({
          where:{
            id:id
          }
        })
        res.status(200).json({message:'Comment success to delete '})
      }else{
        res.status(404).json({message:'Comment not found'})
      }
    }else{
      next({name:'not found'})
    }
  }catch(err){

  }
}


module.exports = { getComments,postComment,deleteComment}