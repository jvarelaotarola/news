var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    title: { type: String, require: true },
    body: { type: String, require: true },
    topic: { type: Number, require: true }
}, {
    versionKey: false
});

module.exports = mongoose.model('product', schema);
