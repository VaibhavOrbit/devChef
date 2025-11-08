import express from "express";
const app = express(); 

app.listen(3000, ()=> console.log("server started at 3000"));
app.use(express.json());

app.post("/singup", (req,res)=>{
    const email = req.body(); 
    const password = req.body(); 

})


app.post("/sigin", (req,res)=>{
    const email = req.body(); 
    const password = req.body(); 

})