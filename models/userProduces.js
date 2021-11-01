"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userProduces extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      userProduces.belongsTo(models.user);
      userProduces.belongsTo(models.produce);
    }
  }
  userProduces.init(
    {
      userId: { type: DataTypes.INTEGER, allowNull: false },
      produceId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "userProduces",
    }
  );
  return userProduces;
};
