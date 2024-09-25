const { models } = require("mongoose");
const TodoModel=require("../models/Model");

module.exports.getalltodoTasks=async(req,res)=>{
    const alltasks=await TodoModel.find()
    res.send(alltasks);
    

}
module.exports.saveTasks=async(req,res)=>{
    const {tasks}=req.body
    

// For Create Tasks
TodoModel.create({tasks})
.then((data)=>{
    console.log("Saved Success")
    res.status(201).send(data)
}).catch((err)=>{
    console.log(err);
    res.send({error:err,msg:"You Have An Error Please Correct It"})
})
}

// For Update Task
module.exports.updateTasks=async(req,res)=>{
   const {tasks}=req.body
   const {id}=req.params

TodoModel.findByIdAndUpdate(id,{tasks})
.then(()=>res.send("Updated Success"))
.catch((err)=>{
    console.log(err);
    res.send({error:err,msg:"Something Broke In Update"})
})
}

// For Delete Task
module.exports.deleteTasks=async(req,res)=>{
    const{id}=req.params

TodoModel.findByIdAndDelete(id)
.then(()=>res.send("Deleted..."))
.catch((err)=>{
    console.log(err)
    res.send({error:err,message:"Something Broke At Delete"})
})
}