const nodemailer = require("nodemailer"),
  config = require("./config");

module.exports = {
  async mailer(recipientMail, confirmationMail) {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: config.nodemailer.email,
        pass: config.nodemailer.pass
      }
    });
    const link =
      "https://pure-wave-75808.herokuapp.com/confirmation_mail/" +
      confirmationMail;
    try {
      let info = await transporter.sendMail({
        from: "testemail400@gmail.com",
        to: recipientMail,
        subject: "Hello ✔ ",
        text: `Hello world`,
        html: "Click this <a href='" + link + "'><span>link</span></a>"
      });

      return info;
    } catch (err) {
      return err.message;
    }
  }
};
