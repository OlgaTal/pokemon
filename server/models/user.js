/* eslint-disable new-cap, func-names */
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jwt-simple';
// import cp from 'childprocess';
const Schema = mongoose.Schema;

const schema = new Schema({
  // email: { type: String, required: true, minlength: 3, unique: true },
  email: { type: String, required: true, minlength: 3, unique: true },
  password: { type: String, required: true, minlength: 3 },
  pokemon: [{ type: mongoose.Schema.ObjectId, ref: 'Pokemon' }],
  dateCreated: { type: Date, default: Date.now },
});

schema.pre('save', function (next) {
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

schema.methods.token = function () {
  const sub = this._id;
  const exp = (Date.now() / 1000) + 120;  // expire in 2 minutes
  const secret = process.env.SECRET;

  return jwt.encode({ sub, exp }, secret);
};

schema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', schema);
