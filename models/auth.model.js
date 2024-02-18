const { Schema, model } = require("mongoose");

const AuthSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
});

const AuthModel = model("auth", AuthSchema);

module.exports.getUserByEmail = (email) => AuthModel.findOne({ email });
module.exports.getUserByEmailForLogin = (email) =>
  AuthModel.findOne({ email }).select("+password");

module.exports.getUserById = (id) => AuthModel.findById(id);

module.exports.createUser = (name, email, password) =>
  AuthModel.create({ name, email, password});

module.exports.deleteUserById = (id) => AuthModel.findOneAndDelete({ id });
module.exports.updateUserById = (id, values) =>
  AuthModel.findByIdAndUpdate(id, values);
