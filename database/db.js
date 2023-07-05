require('dotenv').config()
const { Sequelize } = require('sequelize')

// creating instance
const name = 'uniinfo'
const db = new Sequelize(process.env.DATABASE_URL)

// db.authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });



module.exports = db;