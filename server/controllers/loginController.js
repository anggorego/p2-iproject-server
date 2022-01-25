const {User} = require("../models")
const { compareHash} = require("../helpers/bcryptjs")
const {createToken} = require("../helpers/jwt")

const postLogin = async (req,res,next)=>{
  try{
    const {email,password} = req.body
    const result = await User.findOne({
      where:{
        email:email,
      },
    });
    if(!result){
      throw{name: 'invalid email/password'}
    }
    if(!compareHash(password,result.password)){
      throw { name:'invalid email/password'}
    }

    const payload = {
      id: result.id,
      name: result.name,
      email:result.email
    };
    const token = createToken(payload);
    res.status(201).json({
      access_token:token,
    })
  }catch(err){
    next(err)
  }
}
module.exports = {postLogin}