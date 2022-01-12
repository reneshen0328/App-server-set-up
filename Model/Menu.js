const { db, DataTypes, Model } = require("../db");

class Menu extends Model {}

Menu.init(
  {
    type: DataTypes.ENUM("Breakfast", "Brunch", "Lunch", "Dinner", "Dessert")
  },
  {
    sequelize: db,
  }
);

module.exports = { Menu };