const express = require("express");
const router = express.Router();
const {campus} = require("../database/models");
router.use(require('express').json())
//Root here is localhost:8080/api/campuses
router.get("/", async (req, res, next) => {
    try{

        //Campuses.findAll(); === SELECT * FROM campuses
        const allCampuses = await campus.findAll();

        allCampuses
        ? res.status(200).json(allCampuses) //if allCampuses true
        : res.status(404).send("Campus list not found") //if allCampuses false then show error message
    }catch(error){
        next(error);
    }
})

router.post('/',async(req,res,next)=>{
    try{
        //deconstruning the data passed from the form
        const {name,image,address,description}= req.body;
        const newCampus= await campus.create({name,image,address,description});
        res.status(200).json(newCampus);
    }catch (error){
        next(error)
    }
});

router.get("/:campusid",async (req,res,next)=>{
    try{
        const campusFound= await campus.findByPk(req.params.campusid);
        campusFound?res.status(200).json(campusFound):res.status(400).send("Student not found")
    }catch(error){
        next(error)
    }
});
module.exports = router;