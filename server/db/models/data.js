const Sequelize = require('sequelize')
const db = require('../db')

const Data = db.define('data', {
  jobTitle: {
    type: Sequelize.STRING,
    allowNull: false
  },
  team: {
    type: Sequelize.STRING,
    allowNull: false
  },
  salary: {
    type: Sequelize.STRING,
    allowNull: false
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false
  },
  experience: {
    type: Sequelize.STRING,
    allowNull: false
  },
  gender: {
    type: Sequelize.ENUM({
      values: ['Male', 'Female', 'Non-Binary']
    }),
    allowNull: false
  },
  education: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Data
