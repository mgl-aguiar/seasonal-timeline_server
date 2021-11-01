"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "userProduces",
      [
        {
          userId: 1,
          produceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          produceId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          produceId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          produceId: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          produceId: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          produceId: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          produceId: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("userProduces", null, {});
  },
};
