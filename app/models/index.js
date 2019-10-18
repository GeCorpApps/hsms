'use strict';
const fs        = require("fs");
const path      = require("path");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DB_DATEBASE, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    operatorsAliases: false
});

const db = {};

fs
  .readdirSync(__dirname)
  .filter((file) => {
    return (file.indexOf(".") !== 0) && (file !== "index.js") && (file !== "migrations") && (file !== "redshift-migrations");
  })
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }

  db[modelName].sync().then(result => {
    // some logic
  }).catch(err => {
    // some logic
  })
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;