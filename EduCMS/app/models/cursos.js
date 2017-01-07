function CursosModel(mongo){
	this.mongo = mongo;
}
CursosModel.prototype.find = function(query, callback){
	this.mongo.collection('cursos').find(query, callback);
};
CursosModel.prototype.findOne = function(query, callback){
	var query = {_id: this.mongo.ObjectId(_id)};
		this.mongo.collection('cursos').findOne(query, callback);
};
CursosModel.prototype.create = function(query, callback){
	this.mongo.collection('cursos').insert(data, callback);
};
CursosModel.prototype.update = function(query, callback){
	var query = {_id: this.mongo.ObjectId(_id)};
	this.mongo.collection('cursos').update(query, data, callback);
};
CursosModel.prototype.remove = function(query, callback){
	var query = {_id: this.mongo.Object(_id)};
	this.mongo.collection('cursos').remove(query, callback);
};

module.exports = function(mongo){
	return new CursosModel(mongo);
}
