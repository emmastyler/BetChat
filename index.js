const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const {
  createUser,
  getUser,
  getUserById,
  login,
} = require("./controllers/userControllers");
const { createPost, getPost } = require("./controllers/postController");

dotenv.config();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(express.static("pages"));
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/pages/home.html"));
});

app.get("/user", getUser);
app.get("/user/:id", getUserById);
app.post("/user/create", createUser);
app.post("/user/login", login);

app.post("/post/create", createPost);
app.get("/post", getPost);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("connected"))
  .catch((error) => console.log(error));

app.all("*", (req, res) => {
  res.status(404).send("<h1>Page Not found</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Backend is running on port ${process.env.PORT}`);
});
