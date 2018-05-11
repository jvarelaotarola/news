var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    type: { type: String, require: true },
},{ 
	versionKey: false 
});

module.exports = mongoose.model('user', schema);
