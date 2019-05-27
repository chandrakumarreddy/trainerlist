const express = require("express"),
  cors = require("cors"),
  path = require("path"),
  multer = require("multer"),
  passport = require("passport"),
  bodyParser = require("body-parser"),
  app = express(),
  { connect, generateToken } = require("./config/db"),
  multerConfig = require("./config/multer"),
  { mailer } = require("./config/mailer"),
  {
    create,
    update,
    getUsers,
    getUser,
    deleteUser,
    getUsersByFilter
  } = require("./controllers/register"),
  { createAdmin, adminLogin, logIn } = require("./controllers/admin"),
  upload = multerConfig(multer, path),
  PORT = process.env.PORT || 3000;

connect();

app.use(express.static("public"));
app.use("/uploads", express.static("src/uploads"));
app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./config/passport")(passport);

app.route("/logIn").post(logIn);

app.route("/addadmin").post(createAdmin);
app.route("/subadminLogin").post(adminLogin);

app.route("/register").post(
  upload.fields([
    {
      name: "photo",
      maxCount: 1
    },
    {
      name: "certification",
      maxCount: 3
    }
  ]),
  create
);
app
  .route("/register/:id")
  .patch(
    upload.fields([
      {
        name: "photo",
        maxCount: 1
      },
      {
        name: "certification",
        maxCount: 3
      }
    ]),

    update
  )
  .delete(deleteUser);

app.route("/users/filter").get(getUsersByFilter);
app.route("/users").get(getUsers);
app.route("/users/:id").get(getUser);
app.route("/signin").post((req, res) => {
  mailer(req.body.recipientMail, generateToken(req.body.recipientMail)).then(
    () => {
      return res.status(200).json({
        message: "successfully registered"
      });
    }
  );
});

app.get("/confirmation_mail/:id", (req, res) => {
  return res.redirect("http://localhost:8080");
});

app.get("*", (req, res) => {
  return res.sendFile(path.join(__dirname, "../public", "index.html"));
});

app.listen(PORT, () => console.log(`server is listening at ${PORT}`));
