const express = require("express");
const router = express.Router();

const {Campuses} = require("../database/models");

//Root here is localhost:8080/api/campuses
router.get("/", async (req, res, next) => {
    try{

        //Campuses.findAll(); === SELECT * FROM campuses
        const allCampuses = await Campuses.findAll();

        allCampuses
        ? res.status(200).json(allCampuses) //if allCampuses true
        : res.status(404).send("Campus list not found") //if allCampuses false then show error message
    }catch(error){
        next(error);
    }
})
module.exports = router;