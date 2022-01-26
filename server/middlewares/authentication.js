const {User} = require('../models')
const { verifyToken} = require('../helpers/jwt');

const authentication = async (req,res,next)=>{
  try{
    const {access_token} = req.headers 
    const payload = verifyToken(access_token)

    const user = await User.findByPk(payload.id)
    
    req.currentUser = {id: user.id, name:user.name, email:user.email}

    if( access_token){
      next()
    }else{
      next({name: 'Invalid access'})
    }
  } catch(err){
    next(err)
  }

}

module.exports = authentication