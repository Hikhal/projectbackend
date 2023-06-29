const express = require('express');
const db = require('./database/db');
const PORT="8080"
const app =express();

app.use("/api",require("./apis"))

const serverRun=()=>{
    app.listen(PORT,()=>{
        console.log("Live on port:"+PORT);
    })
};

const syncServer=()=>db.sync();

syncServer();
serverRun()

module.exports=app;