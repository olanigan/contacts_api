"use strict";

var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");
const sqlite = require('sqlite3').verbose();
var env       = process.env.NODE_ENV || "development";
var config    = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
var sequelize = new Sequelize(config.database, '', '', config);

var db        = {};

//Import contact model to database
db.Contact = sequelize.import(path.join(__dirname , "/contact"));

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;