const express = require('express')
const bmrRouter = express.Router();

const bmrController = require("../controllers/bmrController")

bmrRouter.get('/', bmrController.getBmr)

module.exports = bmrRouter