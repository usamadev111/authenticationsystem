import express from "express";
import { registerUSer } from "../controllers/userController.js";

const router = express.Router();

router.post("/register", registerUSer);

export default router;
