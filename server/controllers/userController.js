const {User} =require("../models")

const getUser = async(req,res,next)=>{
    const id = req.currentUser.id
  try{
    const findUser = await User.findByPk(id)
    if(findUser){
      res.status(200).json(findUser)
    }else{
      res.status(404).json({message:'user not found'})
    }
  }catch(err){
    next(err)
  }
}
module.exports = { getUser}