const http = require('http');
const fs = require('fs');


const svr = http.createServer((req,res)=>{
	console.log(req.url, req.method);
	res.setHeader('Content-type', 'text-html');

	fs.readFile('./Index.html',(err, data)=>{
	if(err){
		console.log(err);
		res.end();
	}
	else
	{
		res.end(data);
	}
	});
	//res.write('<p>YO SSUP?</p>');
	//res.end();
});

svr.listen(3000,'localhost',()=>{
  console.log('listening for requests on port 3000');
});