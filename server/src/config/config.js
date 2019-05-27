module.exports = {
  authentication: {
    JWT_SECRET: process.env.PORT || "secret"
  },
  mongo_url: "mongodb://localhost:27017/tutorman",
  nodemailer: {
    email: process.env.nodemailer_email || "testemailus400@gmail.com",
    pass: process.env.nodemailer_pass || "Testemail@1"
  }
};
