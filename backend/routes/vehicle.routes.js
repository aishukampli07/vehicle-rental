const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/types/:wheels", async (req, res) => {
  try {
    const wheels = parseInt(req.params.wheels);

    const types = await db.Vehicle.findAll({
      attributes: ["type"],
      where: { wheels },
      group: ["type"]
    });

    res.json(types);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching vehicle types" });
  }
});

module.exports = router;
