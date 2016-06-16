// =============================================================
// Dependencies
// =============================================================
var connection = require('./connection.js');

// =============================================================
// ORM 
// =============================================================


var orm = {
	allBurgers: function(callback){
		connection.query('SELECT * FROM burgers;',function(err,result){
			if (err) throw err;
			callback(result);
			
		});
	},
	
	addBurgers: function(addBurger, callback) {
		connection.query('INSERT INTO burgers SET ?' , {burgerName : addBurger}, function(err, result) {
			if (err) throw err;
			callback();
		});
	},

	devourBurger: function(id,callback){
		var script = "UPDATE burgers SET devoured = 1 WHERE id = ?;";
		connection.query(script,[id],function(err,result){
			if (err) throw err;
			callback(result);
		});
	}

};

module.exports = orm;