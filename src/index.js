const fs = require('fs');
const process = require('process');
const Hapi = require('hapi');

var routes = []

console.log("Loading routes...")
fs.readdirSync(__dirname + "/routes")
    .filter(file => file != 'index.js')
    .forEach(file => {
        console.log("Loading routes from: " + file)
        require(`./routes/${file}`).routes.forEach(function (element) {
            routes.push(element)
        })
    })

const server = new Hapi.Server();
server.connection({
    port: 3000,
    host: 'localhost'
});

routes.forEach(function (element) {
    server.route(element)
}, this);

server.start((err) => {
    if (err) {
        throw err;
    }

    console.log(`Server running at: ${server.info.uri}`);
})