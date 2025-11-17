import { NextFunction } from "express";
import jwt from "jsonwebtoken"


   
export function userMiddlerware(req:Request, res:Response, next:NextFunction){ 

    const token = req.headers.autharization;

    try{
        const decoded = jwt.verify(token , process.env.USER_JWT_PASS!); 

        if(decoded.userId){
            req.userId = decoded.userId; 
            next(); 
        }
         else{
            res.status(403).json({
                message: "incorrect token"
            })
         }

    } catch(e) {
        res.status(403).json({
            message: "Incorrect token"
        })

    }
    
        
}