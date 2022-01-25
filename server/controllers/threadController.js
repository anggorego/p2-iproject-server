const {Thread} = require("../models")

const getThreads = async(req,res,next)=>{

  try{
    const threads = await Thread.findAll()
    res.status(200).json(threads)
  }catch(err){
    next()
  }
}

const getThreadById = async(req,res,next)=>{
// console.log('jalan');
const id = req.params.id
try{
  const thread = await Thread.findOne({where:{id:id}})
  console.log(thread);
  if (thread){
    res.status(200).json(thread)
  }else{
    next({name:'not found'})
  }
}catch(err){
  next(err)
}
  
}

const getThreadsByUser = async(req,res,next)=>{
  const userId = req.currentUser.id
  try{
    const threads = await Thread.findAll({
      where:{userId:userId}
    })
 
    res.status(200).json(threads)
  }catch(err){
    
    next(err)
  }
}

const postThread = async(req,res,next)=>{
  const {title,description} =req.body 
  const userId = req.currentUser.id
  try{
    const threads = await Thread.create({title,description,userId})
    res.status(201).json(threads)
  }catch(err){
    next(err)
  }
}

const deleteThread = async(req,res,next)=>{
  const userId = req.currentUser.id
  const id = req.params.id
  try{
    const findThread = await Thread.findOne({
      where:{
        id:id,
        userId:userId
      }
    })
    if(findThread){
      await Thread.destroy({
        where:{
          id:id,
        }
      })
      res.status(200).json({message: "Threads success to delete"})
    }else{
      next({name:'not found'})
    }
  }catch(err){
    next(err)
  }
}

const updateThread = async(req,res,next)=>{
  const id = req.params.id
  const {title,description} = req.body
  try{
    const findThread = await Thread.findOne({
      where:{
        id:id
      }
    })
    if ( findThread){
      const updateThread = await Thread.update({
        title:title,
        description:description
      },{
        where:{id:id},
        returning:true
      })
      res.status(200).json({result:updateThread[1][0]})
    }else{
      next({name:'not found'})
    }
  }catch(err){
    console.log(err);
    next(err)
  }
}

module.exports = {getThreads,getThreadById,getThreadsByUser,postThread, deleteThread,updateThread}