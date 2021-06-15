const http = require('http');
const tasksHandler = require('./tasksHandler');

const server = http.createServer((req, res)=> {
    const { url, method } = req;
    console.log(`URL: ${url} - Method: ${method}`);

    switch(method) {
        case "GET":
            if (url === "/") {
                res.writeHead(200, {'Content-Type':'application/json'});
                res.write(JSON.stringify({message: 'Server is working'}));
                res.end();            
            } 

            if (url === "/tasks") {
                tasksHandler.getTaskHandler(res, req);
            }
       case "POST":
        if (url === "/tasks") {
            tasksHandler.createTaskHandler(res, req);
        }
        case  "PUT":
         if (url === "/tasks?id=1")   {
                tasksHandler.updateTaskHandler(req, res);
            }
        //case "DELETE":
        //default:

    }
})

server.listen(5000, () => console.log(`Server on port 5000`));    