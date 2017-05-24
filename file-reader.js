var EventEmitter =  require("events").EventEmitter;
var emitter = new EventEmitter();
var fs = require("fs");
var path=  require("path");

var filePath = path.join(__dirname , "sample23.txt")

/*this is other way */
/*var filePath = __dirname + "/sample.txt"*/*
/*var filepath ='./sample.txt' ;*/


emitter.on("start_reading" , function(filePath){
	console.log("start reading the file")
	fs.readFile(filePath , "utf-8" , function(err, data){

if(err){
	emitter.emit("error" , err);
}	

/*console.log(data)*/
emitter.emit("print_content" , data);
/*we can write this also by invoking emit*/



	})
})

emitter.on("print_content" , function(data){
	console.log(data);
	emitter.emit("done" , "successfully done");

})
emitter.on("error" , function(message){
	console.log(message);
console.log("error details" , +message);
})
emitter.on("done" , function(message){
	console.log(message);
})

emitter.emit("start_reading" , filePath);