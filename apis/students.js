const router = require('express').Router()
const e = require('express')
const {student}  = require('../database/models')

router.use(require('express').json())


// path is defined as localhost..../apis/students
router.get('/', async (req, res, next)=>{
    try {
        const allStudents = await student.findAll()
        allStudents? res.status(200).json(allStudents) : res.status(404).send("Student list not found.")
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const { firstName, lastName, address, image, email, gpa } = req.body;
        console.log(req.body)

        if (!firstName || !lastName || !address || !email || !gpa) {
            // One of the required fields is not present then send error msg
            res.status(400).send('Bad Request');
            return;
        }


        // add a new column
        const newStudent = await student.create({ 
            firstName,
            lastName,
            address,
            image,
            email,
            gpa
        });

        res.status(200).json(newStudent);
    } catch (error) {
        console.log(error)
        next(error);
    }
});




module.exports = router


