'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Thread extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Thread.belongsTo(models.User,{foreignKey:'userId'})
      Thread.hasMany(models.Comment,{foreignKey:'threadId'})
    }
  }
  Thread.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Thread',
  });
  return Thread;
};