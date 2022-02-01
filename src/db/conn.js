const mongoose=require("mongoose");
const validator=require("validator");

mongoose.connect("mongodb://localhost:practise-api")
.then(()=>{
    console.log("connection successful");
}).catch((err)=>{
    console.log(err);
})

