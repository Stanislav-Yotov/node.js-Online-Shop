const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'stakata1490', { dialect: 'mysql', host: 'localhost' });

module.exports = sequelize;