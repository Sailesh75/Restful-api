const mongoose=require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/practise-api")
.then(()=>{
    console.log("connection successful");
}).catch((err)=>{
    console.log(err);
})

