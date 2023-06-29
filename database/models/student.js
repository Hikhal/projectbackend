const db = require('../db');

const {DataTypes}= require('sequelize');

const Student= db.define('students',{
    firstName:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    
    lastName:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    address:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    image:{
        type: DataTypes.BLOB,
    },

    email:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    gpa:{
        type: DataTypes.INTEGER,
    }
})

module.exports=Student;