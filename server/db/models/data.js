const Sequelize = require('sequelize')
const db = require('../db')

const Data = db.define('data', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  salary: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Data
