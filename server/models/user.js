'use strict';
const {
  Model
} = require('sequelize');
const { createHash} = require("../helpers/bcryptjs")
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Thread,{foreignKey:'userId'})
      User.hasMany(models.Comment,{foreignKey:'userId'})
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        isEmail: true, 
        notEmpty:{msg:'Email is required'},
      }},
    password: {
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        len: [5, 10],
        notEmpty:{msg:'password is required'}
      }},
    phoneNumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((instanceUser,option)=>{
    const hashPassword = createHash(instanceUser.password)
    instanceUser.password = hashPassword
  })
  return User;
};