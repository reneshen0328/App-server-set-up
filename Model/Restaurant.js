const { db, DataTypes, Model } = require("../db");

class Restaurant extends Model {}

Restaurant.init(
  {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    location: DataTypes.STRING,
    happyHour: DataTypes.BOOLEAN
  },
  {
    sequelize: db,
  }
);

module.exports = { Restaurant };