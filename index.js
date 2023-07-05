const express = require('express');
const cors = require('cors');
const db = require('./database/db');
const bodyParser = require('body-parser');
const PORT="8080"
const app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

// Use body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use("/api",require("./apis"))
//app.use(cors());

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

app.use((error, req, res, next) => {
  console.log(error)
  res.send("hey this is my api not running")

})

const serverRun=()=>{
    app.listen(PORT,()=>{
        console.log("Live on port:"+PORT);
    })
};

const syncServer=()=>db.sync({force:true});

syncServer();
serverRun()

module.exports=app;



