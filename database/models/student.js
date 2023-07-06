const db = require('../db');

const {DataTypes}= require('sequelize');

const student= db.define('student',{
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
        type: DataTypes.STRING,
        defaultValue: "https://flyclipart.com/thumb2/profile-icon-png-black-196391.png"
    },

    email:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    gpa:{
        type: DataTypes.FLOAT,
    }
})

module.exports=student;