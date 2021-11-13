"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "The organic farm",
          email: "madeleine@email.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          profileImg:
            "https://foodtolive.com/healthy-blog/wp-content/uploads/sites/3/2017/06/3c271c9f57143d83376b8928faadcc56.jpg",
          website: "theorganicfarm.nl",
          phone: "+31 1234567",
          description:
            "Small family production of organic fruits and vegetables.",
          location: "Fake address 123",
          countryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jon's farm",
          email: "jon@email.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          profileImg:
            "http://wwoof.com.au/wp-content/uploads/mediapress/members/8099/33340/150412050-2.jpg",
          website: "",
          phone: "+31 555666",
          description:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
          location: "Vrendenburg market, every friday",
          countryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fazenda Bio",
          email: "fazendabio@email.com",
          password: bcrypt.hashSync("1234", SALT_ROUNDS),
          profileImg:
            "https://im.whatshot.in/img/2020/Apr/istock-870915532-cropped-1587552820.jpg",
          website: "fazendabio.pt",
          phone: "+351 123456",
          description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
          location: "endereço fake 123",
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
