import { Router } from "express";

const router: Router = Router(); 

router.post("/signup", (req, res)=>{ 
    const {username, password} = req.body(); 

    



})


router.post("/signin", (req, res)=>{ 
    const {username, password} = req.body(); 

    
})

export default router; 