//BURGER.JS - Create a Model of the Table



var Sequelize = require("sequelize");
var models = require("../config/connection.js"); 
//ceate a sequelBurger model
var sequelBurger = models.define("sequelBurgerTable", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  
  burgerName: {
    type: Sequelize.STRING,
  },
  devoured: {
    type: Sequelize.BOOLEAN,
    defaultValue : 0
  },
  date: {
    type: Sequelize.DATE,
  },
  
});

sequelBurger.sync();


module.exports = sequelBurger;