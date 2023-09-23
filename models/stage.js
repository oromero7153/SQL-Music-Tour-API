'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class stage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  stage.init({
    stage_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    stage_name: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
   },
    {
    sequelize,
    modelName: 'stage',
  });
  return stage;
};