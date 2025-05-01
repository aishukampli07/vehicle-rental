module.exports = (sequelize, DataTypes) => {
    const Booking = sequelize.define("Booking", {
      firstName: { type: DataTypes.STRING },
      lastName: { type: DataTypes.STRING },
      startDate: { type: DataTypes.DATE },
      endDate: { type: DataTypes.DATE },
    });
  
    return Booking;
  };
  