"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("produces", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      imageUrl: {
        type: Sequelize.STRING,
      },
      seasonality: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      history: {
        type: Sequelize.TEXT,
      },
      geography: {
        type: Sequelize.TEXT,
      },
      nutrition: {
        type: Sequelize.TEXT,
      },
      seasonStart: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      seasonEnd: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("produces");
  },
};
