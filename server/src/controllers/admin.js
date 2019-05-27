const Admin = require("../models/admin.model");
const AuthUser = require("../models/authUser.model");
const bcrypt = require("bcryptjs");
const config = require("../config/config");
const jwt = require("jsonwebtoken");

module.exports = {
  async createAdmin(req, res) {
    try {
      Admin.findOne({ email: req.body.email }).then(user => {
        if (user) {
          res.status(400).json({ message: "User already exists" });
        } else {
          const newUser = new Admin({
            email: req.body.email,
            password: req.body.password
          });

          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) {
                throw err;
              } else {
                newUser.password = hash;
                newUser
                  .save()
                  .then(user => res.json(user))
                  .catch(() => console.log(err));
              }
            });
          });
        }
      });
    } catch (err) {
      return res.status(500).json({
        error: "internal server error"
      });
    }
  },

  async adminLogin(req, res) {
    try {
      console.log("Query", req.body);
      const email = req.body.email;
      const password = req.body.password;

      Admin.findOne({ email }).then(user => {
        if (!user) {
          res.status(404).json({ message: "User is not found" });
        } else {
          bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
              const payload = {
                id: user.id,
                email: user.email
              };
              jwt.sign(
                payload,
                config.authentication.JWT_SECRET,
                { expiresIn: 3600 },
                (err, token) => {
                  res.json({
                    success: true,
                    token: "Bearer " + token
                  });
                }
              );
            } else {
              // errors.password = "Password is incorrect";
              res.status(400).json({ message: "Password is incorrect" });
            }
          });
        }
      });
    } catch (err) {
      return res.status(500).json({
        error: "internal server error"
      });
    }
  },

  async logIn(req, res) {
    try {
      const email = req.body.email;
      const password = req.body.password;
      AuthUser.findOne({ email }).then(user => {
        if (!user) {
          res.status(404).json({ message: "User is not found" });
        } else {
          bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
              const payload = {
                id: user.id,
                email: user.email
              };
              jwt.sign(
                payload,
                config.authentication.JWT_SECRET,
                { expiresIn: 3600 },
                (err, token) => {
                  res.json({
                    success: true,
                    token: "Bearer " + token
                  });
                }
              );
            } else {
              // errors.password = "Password is incorrect";
              res.status(400).json({ message: "Password is incorrect" });
            }
          });
        }
      });
    } catch (err) {
      return res.status(500).json({
        message: "internal server error"
      });
    }
  }
};
