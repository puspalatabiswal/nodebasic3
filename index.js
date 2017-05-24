var fs = require("fs");

/*read the data from sample file*/

var filepath ='./sample.txt' ;

fs.readFile(filepath , function(err , data){
	if(err){
	console.log(err)
	}
	console.log(data.toString())
})
console.log("completed")

/*write welcome in output file*/

fs.writeFile('./output.txt' , 'welcome' ,function(err){
if(err){
	console.log(err)
}

})

/*delete the output file*/

/*fs.unlink('./output.txt' , function(err){
	if(err){
		console.log(err)
	}
	console.log("successfully deleted");
})*/