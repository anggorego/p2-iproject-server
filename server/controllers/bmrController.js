// const http = require("https")
var axios = require("axios").default;

const getBmr = async (req,res,next)=>{
	const {weight,height,age,sex} =  req.query

var options = {
  method: 'GET',
  url: 'https://bmr-and-tmr.p.rapidapi.com/calculate-bmr',
  params: {weight: weight, height: height, age: age, sex: sex, inImperial: 'false'},
  headers: {
    'x-rapidapi-host': 'bmr-and-tmr.p.rapidapi.com',
    'x-rapidapi-key': 'c85420bee8mshb02c351238c874ap13f316jsncdc7e78faa99'
  }
};
	let data ;
axios.request(options)
.then(function (response) {
	data = response.data
	res.status(200).send(data)
})
.catch(function (error) {
	console.error(error);
});
}

module.exports = {getBmr}