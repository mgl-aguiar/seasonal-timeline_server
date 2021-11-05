const { Router } = require("express");
const router = new Router();

const Produce = require("../models").produce;
const Country = require("../models").country;
const User = require("../models").user;

// get all produces
router.get("/produce/all", async (req, res, next) => {
  try {
    const produces = await Produce.findAll();

    res.send(produces);
  } catch (error) {
    next(error);
  }
});

//get all produces per country
router.get("/produce/country/:countryId", async (req, res, next) => {
  try {
    const countryId = req.params.countryId;

    const produces = await Country.findOne({
      where: { id: countryId },
      include: [Produce],
    });

    res.send(produces);
  } catch (error) {
    next(error);
  }
});

//get produce details
router.get("/produce/details/:produceId", async (req, res, next) => {
  try {
    const produceId = parseInt(req.params.produceId);

    const produceDetails = await Produce.findByPk(produceId, {
      include: [User],
    });

    if (produceDetails) {
      res.send(produceDetails);
    } else {
      res.status(404).send({ message: "Produce not found" });
    }
  } catch (error) {
    next(error);
  }
});

//get local producer with produces
router.get("/producer/:producerId", async (req, res, next) => {
  try {
    const producerId = parseInt(req.params.producerId);

    const producer = await User.findByPk(producerId, {
      include: [Produce],
    });

    delete producer.dataValues["password"];

    if (producer) {
      res.send(producer);
    } else {
      res.status(404).send({ message: "Local producer not found" });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
