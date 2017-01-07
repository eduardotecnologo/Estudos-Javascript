var debug = require('debug')('amanager:controller');
	function CursosController(CursosModel){
		this.model = CursosModel;
	}

CursosController.prototype.getAll = function(req, res, next){
	this.model.find({}, function(err, data){
		if(err){
			return next(err);
		}res.json(data);
	});
}
CursosController.prototype.getById = function(req, res, next){
	var _id = req.params._id;
	this.model.findOne(_id, function(err, data){
		if(err){
			return next(err);
		}res.json(data);
	});
}
CursosController.prototype.create = function(req, res, next){
		var body = req.body;
	this.model.create(body, function(err, data){
		if(err){
			return next(err);
		}res.json(data);
	});
}
CursosController.prototype.update = function(req, res, next){
	var _id = req.params._id;
	this.model.update(_id, function(err, data){
		if(err){
			return next(err);
		}res.json(data);
	});
}
CursosController.prototype.remove = function(req, res, next){
	var _id = req.params._id;
	this.model.remove(_id, function(err, data){
		if(err){
			return next(err);
		}res.json(data);
	});
}

module.exports = function(CursosModel){
	return new CursosController(CursosModel);
}
