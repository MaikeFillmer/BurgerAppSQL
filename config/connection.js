//connection to mysql database

var express = require('express');
var bodyParser = require('body-parser');
var app = express(); // Tells node that we are creating an "express" server

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


var mysql = require('mysql');

var Sequelize = require("sequelize");

//var selectedSource = source.jawsDB;

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize(process.env.JAWSDB_URL, {
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

});

module.exports = sequelize;