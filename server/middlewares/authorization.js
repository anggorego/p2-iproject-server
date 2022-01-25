const { Thread } = require('../models/index')
const authorization = async ( req,res,next)=>{
  console.log(req.currentUser);
let id = req.params.id
let userId =  req.currentUser.id

try{
  const thread = await Thread.findOne({
    where:{
      id:id,
      userId: userId
    },
  })
  if( thread ){
    next()
  }else{
    next({name:'Forbbiden'})
  }
} catch(err){
  next(err)
  }
}

module.exports = authorization