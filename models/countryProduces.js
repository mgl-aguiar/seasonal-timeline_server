"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class countryProduces extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      countryProduces.belongsTo(models.country);
      countryProduces.belongsTo(models.produce);
    }
  }
  countryProduces.init(
    {
      countryId: { type: DataTypes.INTEGER, allowNull: false },
      produceId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "countryProduces",
    }
  );
  return countryProduces;
};
