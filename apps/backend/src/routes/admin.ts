import { Router } from "express";
import { SignupSchema } from "../type";
import { prismaClient } from "@repo/db/client";
import { readonly } from "zod";
import { adminMiddleware } from "../middleware/admin";

const router : Router = Router(); 


router.post("/contest", (req,res)=>{
    const {offset, page}  = req.query; 


})

router.post("/challenge", adminMiddleware, (req ,res)=>{

})


router.post("/link/:challengeId/:contestId", adminMiddleware, (req ,res)=>{
    const {offset, page}  = req.query; 

})


router.delete("/link/:challengeId/:contestId", adminMiddleware, (req, res) => {
    const {offset, page} = req.query;

})

export default router; 
