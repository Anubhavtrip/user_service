const jwt  =  require('jsonwebtoken');
require('dotenv').config();

//authentication by using token 

const verifyToken =(req,res,next)=>{
    //extract token
    const token  = req.header.authorization?.split(" ")[1];
    if(!token) return res.status(401).json({message:"No token Provided"});

    try {
        const decode = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decode;
        next();
    } catch (error) {
        res.status(401).json({message:"Invalid or expired token"})
    }
}


const isAdmin = (req,res,next)=>{
    if(req.user.role !="admin"){
        res.status(403).json({message:"Admin access only"});
    }
    next()
}

const isHr = (req,res,next)=>{
    if(req.user.role != "hr"){
        res.status(403).json({message:"Hr access only"});
    }
    next();
}

//extract _id by using token

const extractUserId = async(req,res) =>{
    //check token 
    const token = req.header.authorization?.split(" ")[1];
    //if token is not exist
    if(!token) return res.status(401).json({message:"Token is not provided"});
    try{
        const decode = jwt.verify(token,process.env.JWT_SECRET);
        return decode;

    }catch(err){
        res.status(401).json({message:"Invalid or expired token"});
    }

}

module.exports= {
    verifyToken,
    isAdmin,
    isHr,
    extractUserId
}