"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class country extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      country.hasMany(models.user);
      country.belongsToMany(models.produce, {
        through: "countryProduces",
        foreignKey: "countryId",
      });
    }
  }
  country.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "country",
    }
  );
  return country;
};
