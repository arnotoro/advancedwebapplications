const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TodosSchema = new Schema({
    user: String,
    items: Array
});

module.exports = mongoose.model('Todos', TodosSchema);