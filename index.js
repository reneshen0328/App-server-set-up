// Import our database
const {db, DataTypes, Model} = require("./db");
const { Restaurant } = require("./Model/Restaurant");
const { Menu } = require("./Model/Menu");
const {MenuItem} = require("./Model/Menu_item")

// Create association
Menu.hasMany(MenuItem);
MenuItem.belongsTo(Menu);

Restaurant.hasMany(Menu);
Menu.belongsTo(Restaurant);

//Adds Restaurant, Menu, and Menu item to database
async function seed(){
	// Clear out our tables => prevents us from making duplicates
    await db.sync({ force: true });

    // Declare the instances
    // Create the instances of Restaurant
	let cafeMei = await Restaurant.create( {
        name: "Cafe Mei",
        type: "Taiwanese Breakfast Place",
        location: "Taipei, Taiwan",
        happyHour: false
      })
    
    // Create the instances of Menu
	let menuCafeMei = await Menu.create({type : 'Breakfast'})

    // Create the instances of Menu item
    let menuItem1 = await MenuItem.create({
        name: "Pork burger",
        price: 7.5,
        description: "Includes pork patty, onion, tomato, and cucumber.",
        seasonal: false
      });
    let menuItem2 = await MenuItem.create({
        name: "Cheese pancake",
        price: 6.5,
        seasonal: false
      });
    let menuItem3 = await MenuItem.create({
        name: "Toasted signature pork sandwich",
        price: 9.0,
        description: "Includes pork, ham, egg, onion, tomato, and cucumber.",
        seasonal: false
      })

    // Association
    await cafeMei.addMenu(menuCafeMei);
    await menuCafeMei.addMenuItem(menuItem1)
    await menuCafeMei.addMenuItem(menuItem2)
    await menuCafeMei.addMenuItem(menuItem3)


    console.log("db seeded!")

}

// seed();
module.exports = {db, Menu, Restaurant, MenuItem, seed};