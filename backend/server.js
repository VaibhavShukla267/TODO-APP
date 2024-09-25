const express=require('express');
const app=express();
const ToDoController=require("./controllers/Controllers")
const mongoose=require('mongoose');
require("dotenv").config();

const cors =require('cors');

const routes=require("./routes/Route")

const PORT=process.env.PORT || 5000;

// app.get('/',(req,res)=>{
//     res.send("Hello")
// })
mongoose
.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"))
.catch((err)=>console.log(err));

app.use(cors());
app.use(express.json());

app.use("/api",routes);




app.listen(PORT,()=>{
    console.log(`Server Running At ${PORT}`)
})



