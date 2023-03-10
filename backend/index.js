const express = require("express");
const cors = require("cors");
const product  = require("./products");
const dotenv = require("dotenv").config();
 
const PORT = process.env.PORT || 5000;
const app = express();  
            
app.use(express.json()) // Configuring middleware functionality,
app.use(cors()); // This will allow us to access the api from the react application since its in another domain

app.get("/",(req,res) => {
    res.send("app sent") 
});
app.get("/cart",(req,res) => {
    res.send(product);    
});
app.listen(PORT,console.log(`Connected of port ${PORT}`));