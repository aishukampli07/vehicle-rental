const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/types/:wheels", async (req, res) => {
  const wheels = parseInt(req.params.wheels);
  const types = await db.Vehicle.findAll({
    attributes: ["type"],
    where: { wheels },
    group: ["type"],
  });
  res.json(types);
});

router.get("/models/:type", async (req, res) => {
  const type = req.params.type;
  const models = await db.Vehicle.findAll({
    attributes: ["id", "model"],
    where: { type },
  });
  res.json(models);
});

module.exports = router;
