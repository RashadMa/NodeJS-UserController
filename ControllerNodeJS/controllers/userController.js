const { User } = require("../models/User");

const userController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find({});
      res.json(users);
    } catch (error) {
      console.log(error);
    }
  },
  getById: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.json(user);
    } catch (error) {
      console.log(error);
    }
  },
  createUser: async (req, res) => {
    try {
      let user = new User({
        email: req.body.email,
        password: req.body.password,
        userName: req.body.userName,
      });
      user.save();
      res.json(user);
    } catch (error) {
      console.log(error);
    }
  },
  updateUser: async (req, res) => {
    try {
      const data = await User.findByIdAndUpdate(req.params.id, {
        email: req.body.email,
        password: req.body.password,
        userName: req.body.userName,
      });
      res.send(data);
    } catch (error) {
      console.log(error);
    }
  },
  deleteUser: async (req, res) => {
    let id = req.params.id;
    User.findByIdAndDelete(id)
      .then((data) => {
        res.json(data);
        console.log(`User ${id} deleted`);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  },
  login: async (req, res) => {
    try {
      const user = await User.findOne({
        email: req.body.email,
        password: req.body.password,
      });
      if (user) {
        res.json(user);
      } else {
        res.status(404).json("User not found");
      }
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = userController;
