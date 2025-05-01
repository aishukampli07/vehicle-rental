const db = require("../models");

async function seed() {
  await db.sequelize.sync({ force: true });

  await db.Vehicle.bulkCreate([
    { type: "Hatchback", model: "Swift", wheels: 4 },
    { type: "SUV", model: "XUV500", wheels: 4 },
    { type: "Sedan", model: "Honda City", wheels: 4 },
    { type: "Cruiser", model: "Royal Enfield", wheels: 2 },
    { type: "Sports", model: "Yamaha R15", wheels: 2 },
  ]);

  console.log("Database Seeded!");
}

seed();
