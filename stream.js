var  fs = require ("fs") ;
var filepath ='./sample.txt' ;



var readable = fs.createReadStream(filepath,{encoding : "utf-8" , highWaterMark :  8 * 1024})

var writable = fs.createWriteStream("./newfile.txt");


readable.on("data" , function(chunk){
	/*console.log(chunk)*/
	console.log(chunk.length)
	writable.write(chunk)
})