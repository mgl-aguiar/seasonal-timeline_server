const User = require("./models").user;
const Country = require("./models").country;
const Produce = require("./models").produce;

async function getUserWithProduces() {
  const users = await Country.findAll({ include: [Produce] });
  return users.map((data) => data.get({ plain: true }));
}

getUserWithProduces().then((data) => console.log(data));
