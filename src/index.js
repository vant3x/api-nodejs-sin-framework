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
                tasksHandler.getTaskHandler(req, res);
            }
            break;
       case "POST":
        if (url === "/tasks") {
            tasksHandler.createTaskHandler(req, res);
        }
            break;
        case  "PUT":
         if (url.includes("/tasks?id="))   {
                tasksHandler.updateTaskHandler(req, res);
            }
          break;
        case "DELETE":
            if (url.includes("/tasks?id="))   {
                tasksHandler.deleteTaskHandler(req, res);
            }
            break;
        //default:

    }
})

server.listen(5000, () => console.log(`Server on port 5000`));    