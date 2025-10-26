import { User } from "../models/userModel.js";
import jwt from "jsonwebtoken";
import { verifyMail } from "../verifyMail/verifyMail.js";
import bcrypt from "bcryptjs";

export const registerUSer = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !password || !email) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ id: newUser._id }, process.env.SECRET_KEY, {
      expiresIn: "10m",
    });

    verifyMail(token, email);

    newUser.token = token;
    await newUser.save();

    if (!newUser) {
      return res.status(400).json({
        success: false,
        message: "Failed to register the user",
      });
    }

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
