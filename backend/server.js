const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./models");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/vehicles", require("./routes/vehicle.routes"));
app.use("/api/bookings", require("./routes/booking.routes"));

db.sequelize.sync({ force: false }).then(() => {
  console.log("DB Synced");
});

app.listen(5000, () => console.log("Server running on port 5000"));
