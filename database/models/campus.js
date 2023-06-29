const { DataTypes } = require('sequelize')
const db = require('../db')

const campus = db.define('campus', {
    name: {
        type: DataTypes.STRING,
        allownull: false,
    },
    // for the image, we'll pass a url. And the default value is an empty string.
    img: {
        type: DataTypes.STRING,
        defaultValue: ""
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