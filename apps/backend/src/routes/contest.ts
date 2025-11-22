import { Router } from "express";

const router : Router = Router(); 

router.get("/active", (req, res)=>{ 
    const {offset, page} = req.query; 

})

router.get("/finished", (req,res)=>{
    const {offset, page} = req.query; 

}) 
router.get("/:contestId", (req,res)=> {
    const contestId  = req.params.contestId; 
     
})



router.post("/submit/:challengeId", (req,res)=>{
    //Have rate limitting  -> gpt to check the submission
    // max 20 submissions per problem 
    //forward the req to gpt 
    //store the res in sorted set and the db 
 
})



export default router; 