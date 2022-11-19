const express=require("express");
require("./db/conn");
const Record=require('./model/students');

const app=express();
const port=process.env.PORT || 3000;

app.use(express.json());

//create record
app.post("/api/v1/records",async(req,res)=>{
    const record=await Record.create(req.body);
    res.status(200).json({
        sucess:true,
        record
    });
})

//read records
app.get("/api/v1/records",async(req,res)=>{
    const record=await Record.find();
    console.log(record);
    res.status(200).json({record})
})

//update record
app.put("/api/v1/records/:id",async(req,res)=>{
    let record=await Record.findById(req.params.id);
    if(!record){
        res.status(200).json({
            success:false,
            message:"Record not found"
        })
    }
    record= await Record.findByIdAndUpdate(req.params.id,req.body,{new:true,newFindAndModify:true,runValidators:true});
    res.status(200).json({
        success:true,
        message:"Record successfully updated",
        record
    })
})

//delete record
app.delete("/api/v1/records/:id",async(req,res)=>{
    let record=await Record.findById(req.params.id);
    if(!record){
        res.status(200).json({
            success:false,
            message:"Record not found"
        })
    }
    record=await record.remove();
    res.status(200).json({
        success:true,
        message:"Record successfully deleted"
    })
})

app.listen(port,()=>{
    console.log(`Connection successful at port ${port}`);
})


