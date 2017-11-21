"use strict";

module.exports = function(sequelize, DataTypes) {
  var Contact = sequelize.define("contacts", {
    id:   { 
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    first_name: {
         type: DataTypes.STRING,
         allowNull: false
    },
    last_name: {
         type: DataTypes.STRING,
         allowNull: false
    },
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
  },
  {timestamps: false}
);

  return Contact;
};
