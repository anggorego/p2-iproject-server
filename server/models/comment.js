'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment.belongsTo(models.User,{foreignKey:'userId'})
      Comment.belongsTo(models.Thread,{foreignKey:'threadId'})
    }
  }
  Comment.init({
    description: {type:DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty:{msg:'description is required'}
      }},
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};