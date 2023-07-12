const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFoods: [String]
});

module.exports = mongoose.model('Person', personSchema);
