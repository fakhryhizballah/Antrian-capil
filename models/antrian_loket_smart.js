'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Antrian_loket_smart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Antrian_loket_smart.init({
    nomor_antri: DataTypes.INTEGER,
    loket: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    timestamps: false,
    modelName: 'Antrian_loket_smart',
  });
  return Antrian_loket_smart;
};