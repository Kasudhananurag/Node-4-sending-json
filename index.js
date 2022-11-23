const http = require('http');
http.createServer((req,res) => {
    res.writeHead(200,{'Content-type':'application\json'});
    res.write(JSON.stringify({
        name: 'Anurag Kasudhan',
        age: 24
    }));
    res.end();
}).listen(3000);