import { Router } from "express";

const router : Router = Router(); 

router.get("/active", (req, res)=>{ 
    const {offset, page} = req.query; 

})


router.get("/finished", (req,res)=>{
    const {offset, page} = req.query; 

}) 


export default router; 