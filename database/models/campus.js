const { DataTypes } = require('sequelize')
const db = require('../db')

const campus = db.define('campus', {
    name: {
        type: DataTypes.STRING,
        allownull: false,
    },
    img: {
        type: DataTypes.BLOB
    },
    address: {
        type: DataTypes.STRING,
        allownull: false
    },
    desciption: {
        type: DataTypes.TEXT,
        allownull: false
    }
})

module.exports = campus