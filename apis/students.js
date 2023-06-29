const router = require('express').Router()
const student  = require('../database/models/student')

// path is defined as localhost..../apis/students
router.get('/', async (req, res, next)=>{
    try {
        const allStudents = student.findAll()
        allStudents? res.status(200).json(allStudents) : res.status(404).send("Student list not found.")
    } catch (error) {
        next(error)
    }
})

module.exports = router


