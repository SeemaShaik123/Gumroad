const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config");

const authMiddleware = (req,res,next)=>{
    const authHeader = req.headers.authorization;
    
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(401).json({
            message:"Authentication failed"
        })
    }
    
    const token = authHeader.split(' ')[1];
    try{
        const decoded = jwt.verify(token,JWT_SECRET);
        if(decoded.userId){
            req.userId = decoded.userId;
            next();
        }else{
            return res.status(403).json({
                message : "Authentication failed"
            });    
        }
    }
    catch(e){
        return res.status(403).json({
            message : "Authentication failed"
        });    
    }
}

module.exports = {
    authMiddleware
//   JWT_SECRET: "your_secret_key"

}