'use strict';

const { spawn } = require('child_process')

var exports = module.exports = {}


function status(request, response){
    spawn('/bin/su', 'postgres', ['-c', "<>/pg_ctl -D <> status"])
}

exports.routes = [
    {method: 'GET', path: '/blerg', handler: blerf}
]