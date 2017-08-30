var mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017");

var personSchema = new mongoose.Schema({
  name:String,
  age:Number,
  hobby:String
});

var Person = mongoose.model('Person',personSchema);
