"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Madeleine",
          email: "madeleine@email.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          profileImg: "",
          website: "",
          phone: "+31 1234567",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
          location: "my back yard",
          countryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fazenda Bio",
          email: "fazendabio@email.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          profileImg: "",
          website: "fazendabio.pt",
          phone: "+351 123456",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
          location: "feira da esquina",
          countryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
