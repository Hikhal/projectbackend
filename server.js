const express = require('express');
const cors = require('cors');
const db = require('./database/db');
const PORT="8080"
const app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3002');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use("/api",require("./apis"))
//app.use(cors());

const serverRun=()=>{
    app.listen(PORT,()=>{
        console.log("Live on port:"+PORT);
    })
};

const syncServer=()=>db.sync();

syncServer();
serverRun()

module.exports=app;
