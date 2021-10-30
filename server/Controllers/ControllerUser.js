const { User } = require("../models");
const { signToken } = require("../helpers/jwt");
const { checkPassword } = require("../helpers/bcryptjs");

class ControllerUser {
  static async register(req, res, next) {
    const {
      fullname,
      username,
      email,
      password
    } = req.body;
    try {
      const result = await User.create({
        fullname,
        username,
        email,
        password
      });
      res.status(201).json({
        id: result.id,
        email: result.email,
        username: result.username,
        fullname: result.fullname,
      });
    } catch (err) {
      next(err);
    }
  }

  static async login(req, res, next) {
    const { email, password } = req.body;
    try {
      const result = await User.findOne({ where: { email } });
      if (result && checkPassword(password, result.password)) {
        const access_token = signToken({
          id: result.id,
          email: result.email,
        });
        res.status(200).json({
          id: result.id,
          email: result.email,
          username: result.username,
          fullname: result.fullname,
          access_token,
        });
      } else {
        throw { name: "Unauthorized" };
      }
    } catch (err) {
      next(err);
    }
  }
}

module.exports = ControllerUser;
