import bcrypt from "bcryptjs";

//signup new user

import User from "../models/User";
import { generateToken } from "../lib/utils";

export const signup = async (req,res)=>{

    const {email, fullname, password, bio} = req.body;

    try {
        
        if(!fullname || !email || !password || !bio){
            return res.json({success:false, message:"All fields are required"});
        }

        const user = await User.findOne({email});
        if(user){
            return res.json({success:false, message:"User already exists"});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = await User.create({
            fullname,
            email,
            password: hashedPassword,
            bio,
        });

        //after creating user we need a token to authenticate the user
        const token = generateToken(newUser._id);

        res.json({
            success: true,
            userData : newUser,
            token,
            message: "User created successfully",
        })

    } catch (error) {
        console.log("Error in signup controller:", error);
        
       res.json({success:false, message:"Something went wrong", error: error.message});
        
    }

}

//controller to login user
export const login = async(req,res)=>{

   try {
        const {email, password} = req.body;
       
        const userData = await User.findOne({email});
        
        const isPasswordCorrect = await bcrypt.compare(password, userData.password);
        
        if(!isPasswordCorrect){
            return res.json({success:false, message:"Invalid credentials"});
        }

        const token = generateToken(userData._id);

        res.json({
            success: true,
            userData,
            token,
            message: "User logged in successfully",
        });
        
   } catch (error) {

        console.log("Error in login controller:", error);
        res.json({success:false, message:"Something went wrong", error: error.message});
   }
}


