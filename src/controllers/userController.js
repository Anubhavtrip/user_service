const User = require("../models/users.js");


//get all users (admin/hr)

exports.getAllUsers = async(req,res)=>{
    try{
        const allUsers = await User.find({isActive:false}).select("-password");
        res.status(200).json({
            status:true,
            data:allUsers
        })

    }catch(err){
        res.status(500).json({status:false,error:err.message});
        // console.log("something whent wrong");
    }
}

//get single user profile
exports.getUserById = async(req,res)=>{
    try{
        //extract user by id
        const user = await User.findById(req.params.id).select("-password");
        if(!user) return res.status(404).json({status:false,error:"User not found"});
        res.status(200).json({
            status:true,
            data:user
        })
    }catch(err){
        res.status(500).json({status:false,error:err.message});
    }
}

//Update user profile (self or by admin) 





// Deactivate user (soft delete)

exports.deactivateUser = async(req,res)=>{
    try{
        const updateUser = await User.findByIdAndUpdate(req.params.id,{isActive:false});
        if(!updateUser) return res.status(401).json({
            status:false,
            error:"User not found"
        })
        res.status(200).json({status:true,message:"User successfully deactivate"});
    }catch(err){
        res.status(500).json({status:false,error:err.message})
    }
}

//change user role (admin only)

// exports.changedUserRole = async() =>{
//     try{

//     }catch{

//     }
// }
