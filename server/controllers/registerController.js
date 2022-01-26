const { User} = require("../models")
const postRegister = async(req,res,next)=>{
  try{
    const {name,email,password,phoneNumber} = req.body

    const result = await User.create({name,email,password,phoneNumber})
    res.status(201).json(result)
    if(!result){
      throw {name:'registration failed'}
    }
  } catch(err){
   
    next(err)
  }
}

module.exports = {postRegister}