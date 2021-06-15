const bodyParser = require("./lib/bodyParser");

let database = [];

exports.getTaskHandler = (res, req)  => {
    res.writeHead(200, {'Content-Type':'application/json'});
    res.write(JSON.stringify(database));
    res.end();
}

exports.createTaskHandler =  async (res, req)  => {
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


exports.updateTaskHandler =  async (res, req)  => {
    let {url} = req;
        //await bodyParser(req);
    console.log(url);
    res.writeHead(200, {'Content-Type':'application/json'});
    res.write(JSON.stringify({message: 'Tarea actualizada con exito'}));
    res.end();
}

