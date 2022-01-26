if(process.env.NODE_ENV == "production"){
  require('dotenv').config()
}
const cors = require('cors')
const express = require('express');
const app = express();
const port = process.env.PORT ||3000;
const router = require("./routers/index")
const errorsHandler = require("./middlewares/errorsHandler")
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/', router)
app.use(errorsHandler)


app.listen(port,()=>{
  console.log(`Server listening on port ${port}`);
})