const bodyParser = require("./lib/bodyParser");

let database = [];

exports.getTaskHandler = (req, res)  => {
    res.writeHead(200, {'Content-Type':'application/json'});
    res.write(JSON.stringify(database));
    res.end();
}

exports.createTaskHandler =  async (req, res)  => {
    try {
        await bodyParser(req);
        console.log(req.body);
        database.push(req.body);
        res.writeHead(200, {'Content-Type':'application/json'});
        console.log(database);
        res.write(JSON.stringify({message: 'Tarea creada con exito'}));
        res.end();
    } catch (error) {
        res.writeHead(500, {'Content-Type':'application/json'});
        res.write(JSON.stringify({message: 'Invalid data'}));
        res.end();
    }
}


exports.updateTaskHandler =  async (req, res)  => {
  try {
    let {url} = req;

    let idQuery = url.split("?")[1];
    let idKey = idQuery.split("=")[0];
    let idValue = idQuery.split("=")[1];

    if (idKey === "id") {
        await bodyParser(req);
        database[idValue - 1] = req.body;
        console.log(url);
        console.log(url);
        res.writeHead(200, {'Content-Type':'application/json'});
        res.write(JSON.stringify({message: 'Tarea actualizada con exito'}));
        res.end(); 
    } else {
        res.writeHead(200, {'Content-Type':'application/json'});
        res.write(JSON.stringify({message: 'Invalid request query', status: 400}));
        res.end(); 
    }
  } catch (error) {
    res.writeHead(400, {'Content-Type':'application/json'});
    res.write(JSON.stringify({message: 'Invalid body data was provided: ' + error.message}));
    res.end(); 
  }
}

exports.deleteTaskHandler = async (req, res) => {
    let {url} = req;

    let idQuery = url.split("?")[1];
    let idKey = idQuery.split("=")[0];
    let idValue = idQuery.split("=")[1];

    if (idKey === "id") {
        database.splice(idValue - 1, 1); 
            res.writeHead(200, {'Content-Type':'application/json'});
            res.write(JSON.stringify({message: 'Tarea eliminada con exito'}));
            res.end(); 
    } else {
        res.writeHead(400, {'Content-Type':'application/json'});
        res.write(JSON.stringify({message: 'Invalid body data was provided: ' + error.message}));
        res.end(); 
    }
}