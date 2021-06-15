const http = require('http');

const server = http.createServer((req, res)=> {
    const { url, method } = req;
    console.log(`URL: ${url} - Method: ${method}`);

    switch(method) {
        case "GET":
            if (url === "/") {
                res.writeHead(200, {'Content-Type':'application/json'});
                res.write(JSON.stringify({message: 'Server is working'}));
                res.end();
            
            } else {
                res.writeHead(200, {'Content-Type':'application/json'});
                res.write(JSON.stringify({message: '404 NOT FOUND'}));
                res.end();
            }
       // case "POST":
        //case  "PUT":
        //case "DELETE":
        //default:

    }
})

server.listen(5000);    