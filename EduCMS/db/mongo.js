var mongojs = require('mongojs'),
config = require('config'),
debug = require('debug')('EduCMS:db');

'use strict';

function _connect(){
	var username = config.get('mongo.username'),
		password = config.get('mongo.password'),
		server = config.get('mongo.server'),
		port = config.get('mongo.port'),
		database = config.get('mongo.database'),
		auth = username ? username + ':' + password + '@' : '';

	return 'mongodb://' + auth + server + ':' + port + '/' + database;
}

var db = mongojs(_connect());
db.on('error', function(err){
	debug(err);
});

module.exports = db;