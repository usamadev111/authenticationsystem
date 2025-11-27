import express from "express";
import { registerUSer } from "../controllers/user.js";

const router = express.Router();

router.post("/register", registerUSer);

export default router;
