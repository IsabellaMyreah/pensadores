const Sequelize = require("sequelize");
const databaseConfig = require("../config/database");
const Trought = require("../model/Thought");
const User = require("../model/User")

const connection = new Sequelize(databaseConfig);

User.init(connection);
Trought.init(connection);

module.exports = connection;
