/*
 * Start File for nodeGame server with conf.
 */

var ServerNode = require('nodegame-server');

var options = {
    name: "nodeGame Server",
    port: 8080,
    verbosity: 10,
    dumpsys: false,
    dumpmsg: true,
    mail: false,
    io: {
        set: {
            'transports': ['xhr-polling'],
            'polling duration': 10,
            'log level': -1
        }
    },
    http: {}
};



// ServerNode accepts two additional parameters:
// - an instance of an http Express server
// - an instance of socket.io
// If not passed, they will be created with default settings
var sn = new ServerNode(options);

sn.addChannel({
    name: 'Ultimatum',
    admin: 'ultimatum/admin',
    player: 'ultimatum'
});

//sn.addChannel({
//    name: 'pr',
//    admin: 'pr/admin',
//    player: 'pr'
//});
