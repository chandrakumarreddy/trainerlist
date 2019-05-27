const mongoose = require("mongoose"),
  jwt = require("jsonwebtoken"),
  config = require("./config");

module.exports = {
  connect() {
    mongoose.set("useFindAndModify", false);
    mongoose
      .connect(config.mongo_url, {
        useNewUrlParser: true
      })
      .then(() => console.log("connected to db"))
      .catch(() => {
        console.log("failed to connect to db");
      });
  },
  generateToken(mail) {
    return jwt.sign({ email: mail }, config.authentication.JWT_SECRET, {
      expiresIn: 60 * 60
    });
  }
};
