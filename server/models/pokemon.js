import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({
  pokemonname: { type: String },
  imageurl: { type: String },
  dateCreated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Pokemon', schema);
