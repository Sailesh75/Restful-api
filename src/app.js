const express=require("express");
require("./db/conn");

const app=express();
const port=process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("Hello man!!");
})

app.listen(port,(req,res)=>{
    console.log(`Connection successful at port ${port}`);
})

