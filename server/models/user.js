'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Please fill the Username's Column" },
        notNull: { msg: "Please fill the Username's Column" }
      }
    },
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Please fill the Full Name's Column" },
        notNull: { msg: "Please fill the Full Name's Column" }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        notEmpty: { msg: 'Password is required'},
        notNull: { msg: 'Password is required'},
        len: {
          args: [8, 20],
          msg: 'Min Length of Password is 8 or Max Length of Password is 20'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: { msg: 'Must be email format' },
        notEmpty: { msg: "Please fill the Email's Column" },
        notNull: { msg: "Please fill the Email's Column" }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: (user, options) => {
        user.password = hashPassword(user.password)
      }
    }
  });
  return User;
};