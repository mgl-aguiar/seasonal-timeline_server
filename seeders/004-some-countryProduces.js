"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "countryProduces",
      [
        {
          produceId: 1,
          countryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          produceId: 2,
          countryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          produceId: 2,
          countryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          produceId: 3,
          countryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          produceId: 3,
          countryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          produceId: 4,
          countryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          produceId: 5,
          countryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          produceId: 5,
          countryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          produceId: 6,
          countryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          produceId: 6,
          countryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          produceId: 7,
          countryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          produceId: 8,
          countryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          produceId: 8,
          countryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          produceId: 9,
          countryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          produceId: 9,
          countryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          produceId: 10,
          countryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          produceId: 10,
          countryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          produceId: 11,
          countryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          produceId: 11,
          countryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          produceId: 12,
          countryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          produceId: 13,
          countryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          produceId: 13,
          countryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          produceId: 14,
          countryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          produceId: 15,
          countryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          produceId: 16,
          countryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          produceId: 17,
          countryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          produceId: 18,
          countryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          produceId: 18,
          countryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          produceId: 13,
          countryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          produceId: 14,
          countryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          produceId: 15,
          countryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          produceId: 12,
          countryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          produceId: 2,
          countryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          produceId: 1,
          countryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          produceId: 3,
          countryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          produceId: 5,
          countryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          produceId: 6,
          countryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          produceId: 10,
          countryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          produceId: 9,
          countryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          produceId: 17,
          countryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          produceId: 16,
          countryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("countryProduces", null, {});
  },
};
