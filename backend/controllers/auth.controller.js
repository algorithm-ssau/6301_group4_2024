import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";

export const signup = async(req,res)=>{
    //res.send("signupUser");
    try{
       const{fullName,username,password,confirmPassword,gender}=req.body;

       if(password!==confirmPassword){
        return res.status(400).json({error:"Passwords don't match"})
       }
       const user=await User.findOne({username});
       if(user){
        return res.status(400).json({error:"Username already exists"})
       }
       const salt=await bcryptjs.genSalt(10);
       const hashedPassword=await bcryptjs.hash(password,salt);
       const boyProfilePic='https://cdn.dribbble.com/users/1709884/screenshots/5070649/scribl_avatar-11_4x.png';
       const girlProfilePic='https://falenskij-r43.gosweb.gosuslugi.ru/netcat_files/8/449/zhensk_0.jpg';
       const newUser=({
        fullName,
        username,password:hashedPassword,gender,
        profilePic:gender==='male' ? boyProfilePic :girlProfilePic






       }
       )
       if(newUser){
       await newUser.save()
       res.status(201).json({
        _id:newUser._id,
        fullName:newUser.fullName,
        username:newUser.username,
        profilePic:newUser.profilePic
       })}
       else{
        res.status(400).json({error:"Invalid user Data"})
       }

    }
    catch(error){
        console.log(error.message)
        res.status(500).json({error:"Internal Server Error"})

    }
    //console.log("signupUser");
}

export const login = (req,res)=>{
    console.log("loginUser");
}

export const logout = (req,res)=>{
    console.log("logoutUser");
}
