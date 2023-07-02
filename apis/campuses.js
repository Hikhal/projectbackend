const express = require("express");
const router = express.Router();
const {campus, student} = require("../database/models");
router.use(require('express').json())
//Root here is localhost:8080/api/campuses
router.get("/", async (req, res, next) => {
    try{

        //Campuses.findAll(); === SELECT * FROM campuses
        const allCampuses = await campus.findAll()
        console.log(allCampuses)

        allCampuses
        ? res.status(200).json(allCampuses) //if allCampuses true
        : res.status(404).send("Campus list not found") //if allCampuses false then show error message
    }catch(error){
        next(error);
    }
})

router.post('/', async (req,res,next)=>{
    try{
        //deconstruning the data passed from the form
        const {name,image,address,description}= req.body;
        const newCampus= await campus.create({name,image,address,description});
        res.status(200).json(newCampus);
    }catch (error){
        next(error)
    }
});

router.get("/:campusid", async (req,res,next)=>{
    try{
        const campusFound= await campus.findByPk(req.params.campusid);
        campusFound?res.status(200).json(campusFound):res.status(400).send("Campus not found") //typo in res message should be Campus instead of Student
    }catch(error){
        next(error)
    }
});
router.delete("/delete/:campusid",async(req,res,next)=>{
    try{
        const campusDeletedCount= await campus.destroy({where:{id:req.params.campusid}});
        res.sendStatus(204);
    }catch(error){
        console.log(error)
    }
})



router.post('/:campusid', async (req,res,next) => {
    const id = req.params.campusid
    const { firstName, lastName, address, image, email, gpa } = req.body
    try {
        // Look for a 'campus' record in the database by its primary key 'id'
        const campusfound = await campus.findByPk(id)
        
        // If the campus is not found, send a 400 status response with an error message
        if(!campusfound){
            return res.status(400).send('Campus not found')
        }

        // If the campus is found, create a new 'student' record in the database,
        // using the data sent in the request body and set 'campusId' to 'id'
        const newstudent = student.create({firstName, lastName, address, image, email, gpa, campusId:id})

        // If the new student record was successfully created,
        // send a 200 status response with the new student's data in JSON format.
        // Otherwise, send a 400 status response with an error message.
        campusfound? res.status(200).json(newstudent): res.status(400).send('Student added to campus')
    } catch (error) {
       next(error)
    }
} )



module.exports = router;

