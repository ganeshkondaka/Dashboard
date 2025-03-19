import user_model from "../models/user_model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
  const { email, password } = await req.body;

  if (!email || !password) {
    return res.status(400).json({
      msg: "fill all the feilds",
    });
  }

  try {
    const existed_user = await user_model.findOne({ email });

    if (existed_user) {
      return res.json({ msg: "user alreday existed, u can signin" });
    }
    const hashed_password = await bcrypt.hash(password, 10);
    const created_user = await user_model.create({
      email,
      password: hashed_password,
    });

    const jwt_token = jwt.sign(
      { email: created_user.email, id: created_user._id },
      process.env.jwt_secret,
      { expiresIn: "30d" }
    );

    return res.json({
      user: created_user,
      msg: "user createregistered successfully ",
      token: jwt_token,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "internal server error",
      error,
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      msg: "fill all the feilds",
    });
  }

  try {
    const found_user = await user_model.findOne({ email });
    
    if (!found_user) {
        return res.status(404).json({
            msg: "user not found , better signup",
        });
    }
    
    const matched = await bcrypt.compare(password, found_user.password);
    
    if (!matched) {
        return res.status(400).json({
            msg: "invalid Credentials",
        });
    }
    
    const jwt_token = jwt.sign(
        { email: found_user.email, id: found_user._id },
        process.env.jwt_secret,
        { expiresIn: "30d" }
    );
    // console.log('token',jwt_token);

    return res.status(400).json({
      msg: "login successfull",
      token: jwt_token,
      user:found_user
    });

  } catch (error) {
    return res.status(500).json({
      msg: "failed to signin, internal server error",
      error,
    });
  }
};

