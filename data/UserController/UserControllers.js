const Users = require("../../models/UserModal");
const jwt = require("jsonwebtoken");
const registerUsers = async (req, res) => {
  try {
    const request = await new Users(req.body);
    const data = await request.save();
    res.send({ message: "User successfully created", isSuccess: true });
  } catch (error) {
    res.send({ Error: error });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const data = await Users.find();

    res.send(data);
  } catch (error) {
    res.send({ Error: error });
  }
};

const getuserById = async (req, res) => {
  try {
    let data = await Users.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    console.log(data);
    if (data) {
      console.log("hello");
      let token = jwt.sign({ ...data }, process.env.SECRET);
      res.send({
        isSuccess: true,
        token: token,
        user: data,
        message: "user login successfully",
      });
    } else {
      res.send({
        isSuccess: false,
        message: "email or password does not match.",
      });
    }
  } catch (error) {
    res.send({ Error: error });
  }
};

const updateUser = async (req, res) => {
  try {
    let data = await Users.updateOne(
      { _id: req.body.movieId },
      {
        $set: {
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          username: req.body.username,
        },
      }
    );
    res.send("user record updated");
  } catch (error) {
    res.send({ error: error });
  }
};

const removeUser = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await Users.findByIdAndRemove(id);
    res.send("Users Record Deleted Successfully");
  } catch (error) {
    res.send({
      Error: error,
    });
  }
};

module.exports = {
  registerUsers,
  getAllUsers,
  getuserById,
  removeUser,
  updateUser,
};
