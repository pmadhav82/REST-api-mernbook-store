
require("dotenv").config();
const express = require('express');

const app = express();
const mongoose = require("mongoose");
const cors = require("cors") ;
app.use(express.json());

app.use(cors());
const PORT = process.env.PORT || 8000;

// database connection
try{
mongoose.connect(process.env.DB_URL,{
    useNewUrlParser:true
})
}catch(err){
    console.error(err.message);
}

let db= mongoose.connection;
//bind connection to events to get notification of connection
db.on('connected', ()=>{
    console.log("connected to database")
})
db.on("error", (err)=>{
    console.error(err)
})







// router connection
const route = require("./books")
app.use("/api/books", route);



app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})