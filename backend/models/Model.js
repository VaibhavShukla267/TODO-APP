const mongoose=require('mongoose');

const Schema=new mongoose.Schema({
    tasks:{
        type:String,
        required:true
    },
});

module.exports=mongoose.model("TodoTasks",Schema)