require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const auth = require("./middleware/auth");
const userRoutes = require("./routers/user_routes");

const app = express();
app.use(express.json());

app.use(userRoutes);
  app.post("/welcome", auth, (req, res) => {
    res.status(200).send("Welcome 🙌 " + req.user.user_id + " " + req.user.email +" " + req.user.role);
  });
  

module.exports = app;