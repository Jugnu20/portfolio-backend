var http=require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.write('jugnu');
    res.end();
    console.log('Server Started At Port 8000 ');
}).listen(8000);