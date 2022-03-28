const User = require("../models/users");

//sign-up

const login = async (req, res) => {
  const password = req.body.password;
  const name = req.body.name;

  try {
    const user = await User.findOne({ name: name, password: password });

    if (user) {
      return res.status(200).json(user);
    } else {
      res.status(403).json({
        message: "Wrong Credentials",
      });
    }
  } catch (error) {
    res.status(403).json({
      message: "Cant Process",
    });
  }
};

//

const createUser = async (req, res) => {
  try {
    const users = new User({
      name: req.body.name,
      password: req.body.password,
      interests: req.body.interests,
    });

    const user_name = await User.findOne({ name: req.body.name });

    const nameUser = user_name?.name;

    if (!nameUser) {
      const createdUser = await users.save();
      return res.status(200).json(createdUser);
    } else {
      res.status(400).json({
        message: "Username already exists",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const getUser = async (req, res) => {
  try {
    const users = await User.find({});
    if (users) {
      return res.status(200).json(users);
    }
  } catch (error) {
    console.log(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const users = await User.findById(req.params.id);
    if (users) {
      return res.status(200).json(users);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getUser, getUserById, createUser, login };
