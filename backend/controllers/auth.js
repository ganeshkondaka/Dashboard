import mongoose from "mongoose";
import user_model from "../models/user_model";

const signup = async (req, res) => {
  const { email ,password,} = await req.body();
  try {

      if(!email || !password){
       return res.statsus(400).json({
        msg:"fill all the feilds"
       })

      }
        const user = await user_model.create({
            email,
            password
        })
    } catch (error) {
        
    }
};
