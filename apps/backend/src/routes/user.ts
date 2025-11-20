import { Router } from "express";
import {prismaClient} from "@repo/db/client"
import { SignupSchema } from "../type";
import  jwt, { JwtPayload }  from "jsonwebtoken";
import { emailService } from "../emailService";
require('dotenv').config(); 
const router: Router = Router(); 



router.post("/signin", async(req, res) =>{ 
    const {success, data} = SignupSchema.safeParse(req.body);

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
        
    const token = jwt.sign({
        userId: user.id
    }, process.env.EMAIL_JWT_PASSWORD!); 

    if(process.env.NODE_ENV==="production"){
        await emailService(data.email, `Login to Contest platform`, `Click this link to login ${process.env.FRONTEND_URL!}/user/login/post/?token=${token}`)
    } else {
        console.log(`The link for ${data.email} to login is http://localhost:3000/user/login/post?token=${token}`)
    }
     
    res.json({
        message: "We have emailed the one time login link to you, please check your email"
    })
    

})

router.get("/signin/post", async (req , res) => {
    try{
        const token = req.query.token as string; 
        const decoded = jwt.verify(token, process.env.EMAIL_JWT_PASS! ) as JwtPayload;
        if(decoded.userId){
            const user = await prismaClient.user.findFirst({
                where: {
                    id: decoded.userId
                }
            }); 

            if(!user) { 
                res.status(411).json({
                    message: "Incorrect token"
                })
                return; 
            }

            const token = jwt.sign({
                userId : decoded.userId, 
                role: user.role
            }, process.env.USER_JWT_PASSWORD!)

            res.json({
                token, 
            })
        } else {
            res.status(411).json({
                message:"Incorrect token"
            })
        }
        } catch(e){
            res.status(411).json({
                message: "Incorrect token"
            })
    }
})


export default router; 