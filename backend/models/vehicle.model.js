module.exports = (sequelize, DataTypes) => {
    const Vehicle = sequelize.define("Vehicle", {
      type: { type: DataTypes.STRING },
      model: { type: DataTypes.STRING },
      wheels: { type: DataTypes.INTEGER },
    });
  
    return Vehicle;
  };
  