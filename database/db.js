const { Sequelize } = require('sequelize')

// creating instance
const name = 'uniInfo'
const db = new Sequelize(`postgres://localhost:5432/${name}`)


module.exports = db