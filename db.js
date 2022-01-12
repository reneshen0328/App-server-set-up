const {Sequelize, DataTypes, Model} = require("sequelize");

const db = new Sequelize({
    dialect:"sqlite",
    storage:"./restaurant.db",
    logging: false
})

module.exports = {db, DataTypes, Model};