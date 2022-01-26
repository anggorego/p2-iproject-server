const errorshandler = (err,req,res,next) =>{

  if(err.name === 'JsonWebTokenError'){

    res.status(401).json({message:'Invalid token'})

  } else if( err.name === 'Invalid access'){

    res.status(401).json({ message: "invalid access"})

  } else if ( err.name === 'Forbbiden'){

    res.status(403).json({message:"Unathorized"})

  } else if (err.name === 'SequelizeValidationError'){
    const error = err.errors.map(el=> el.message)

      res.status(400).json({message:error});

  } else if( err.name === 'not found'){

    res.status(404).json({message: "Thread not found"})

  } else if (err.name === 'SequelizeUniqueConstraintError'){

    const error = err.errors.map(el=> el.message)
      res.status(400).json({message:error});

  } else if (err.name === 'invalid email/password'){

    res.status(401).json( {name:'invalid email/password'})
  } else if ( err.name ==='registration failed' ){
    res.status(400).json({message: 'Bad request'})
  }
  else{
    res.status(500).json({message: 'Internal server error'})
  }
}

module.exports = errorshandler