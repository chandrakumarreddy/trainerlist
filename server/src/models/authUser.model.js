const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AuthUserSchema = new Schema({
  email: {
    type: String
  },

  password: {
    type: String
  }
});

module.exports = mongoose.model("AuthUser", AuthUserSchema);
