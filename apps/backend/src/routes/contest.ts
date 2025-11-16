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

router.get("/:contestId/:challengseid", (req,res)=> {
    const contestId = req.params.contestId
})

router.get("/leaderboard/:contestId", (req,res)=>{

})

router.post("/submit/:challengeId", (req,res)=>{

})



export default router; 