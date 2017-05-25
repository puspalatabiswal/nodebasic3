var express = require ("express");
var app = express();
var router = express.Router();
var importData = require('./import.js')
//console .log(importData)
/*console .log(importData.sample());*/
console .log(importData);
/*app.get("/" , function(req , res){
res.json({message : "welcome to hyderabad..."})
})

app.get("/user" , function(req,res){
	res.json({message : "this is user endpoint .. !!"})
})


app.get("/customer" , function(req,res){
var custObj ={
	name : "puspa biswal",
	dob : "22/08/1994" ,
	city : "hyderabad"
}
res.json(custObj)
	
})


var PORT = process.env.PORT || 1337;

app.listen(PORT , function(){
console.log("server listening at PORT !! " +PORT)

})

*/
/*router example*/



router.get("/" , function(req , res){
res.json({message : "welcome to hyderabad..."})
})

router.get("/user" , function(req,res){
	res.json({message : "this is user endpoint .. !!"})
})


router.get("/customer" , function(req,res){
var custObj = [
{
	name : "puspa biswal",
	dob : "22/08/1994" ,
	city : "hyderabad"
},
{
	name : "roja biswal",
	dob : "22/08/1994" ,
	city : "hyderabad"
},
{
	name : "manasi biswal",
	dob : "22/08/1994" ,
	city : "hyderabad"
},
{
	name : "liza biswal",
	dob : "22/08/1994" ,
	city : "hyderabad"
}
]

res.json(custObj)
	
})

/*app.use("/" , router)*/
app.use("/api" , router)

var PORT = process.env.PORT || 1337;

app.listen(PORT , function(){
console.log("server listening at PORT !! " +PORT)

})