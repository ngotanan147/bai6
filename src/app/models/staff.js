const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Customer = new Schema({
    name: { type: String, required: true, maxLenght: 255 },
    age: { type: Number, required: true },

}, {
    timestamps: true
});

module.exports = mongoose.model('Customer', Customer)
