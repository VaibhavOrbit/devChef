import { Router } from "express";
import {prismaClient} from "@repo/db/client"
import { SignupSchema } from "../type";
import { jwt } from "zod";
const router: Router = Router(); 

router.post("/signin", async(req, res)=>{ 
    const {success, data} = SignupSchema.safeParse(req.body());

    if(!success){
        res.status(411).json({
            message:"Incorrect email format"
        })

        return;
    }

    const user = await prismaClient.user.upsert({
        create : {
            email: data.email,
            role: "User"
        },
        update: {},
        where: {
            email: data.email
        }

    });
    
    




    

})



export default router; 