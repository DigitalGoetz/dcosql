'use strict';

var exports = module.exports = {}

function hello (req, res) {
    console.log('hello called')
    res('hello');
}



exports.routes = [{
    method: 'GET',
    path: '/hello',
    handler: hello
}]




