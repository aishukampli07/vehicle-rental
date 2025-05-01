const express = require("express");
const router = express.Router();
const db = require("../models");
const { Op } = require("sequelize");

router.post("/book", async (req, res) => {
  const { firstName, lastName, vehicleId, startDate, endDate } = req.body;

  const overlappingBooking = await db.Booking.findOne({
    where: {
      vehicleId,
      [Op.or]: [
        { startDate: { [Op.between]: [startDate, endDate] } },
        { endDate: { [Op.between]: [startDate, endDate] } },
      ],
    },
  });

  if (overlappingBooking) {
    return res.status(400).json({ message: "Vehicle already booked for selected dates." });
  }

  await db.Booking.create({ firstName, lastName, startDate, endDate, vehicleId });
  res.status(200).json({ message: "Booking successful." });
});

module.exports = router;
