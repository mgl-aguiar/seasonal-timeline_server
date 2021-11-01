const { Router } = require("express");
const router = new Router();

const Produce = require("../models").produce;

router.get("/produce/all", async (req, res, next) => {
  try {
    const produces = await Produce.findAll();

    res.send(produces);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
