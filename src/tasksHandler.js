let database = [];

module.exports.getTaskHandler = function getTaskHandler(res, req) {
    res.writeHead(200, {'Content-Type':'application/json'});
    res.write(JSON.stringify(database));
    res.end();
}