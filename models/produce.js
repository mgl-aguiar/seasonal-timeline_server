"use strict";
const { Model, INTEGER } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class produce extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      produce.belongsToMany(models.country, {
        through: "countryProduces",
        foreignKey: "produceId",
      });
      produce.belongsToMany(models.user, {
        through: "userProduces",
        foreignKey: "produceId",
      });
    }
  }
  produce.init(
    {
      name: { type: DataTypes.STRING, allowNull: false, unique: true },
      imageUrl: DataTypes.STRING,
      seasonality: { type: DataTypes.STRING, allowNull: false },
      history: DataTypes.TEXT,
      geography: DataTypes.TEXT,
      nutrition: DataTypes.TEXT,
      seasonStart: { type: DataTypes.INTEGER, allowNull: false },
      seasonEnd: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "produce",
    }
  );
  return produce;
};
