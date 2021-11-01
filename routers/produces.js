const { Router } = require("express");
const router = new Router();

const Produce = require("../models").produce;
const Country = require("../models").country;

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
router.get("/:countryId/produce/all", async (req, res, next) => {
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

module.exports = router;
