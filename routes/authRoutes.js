import express from "express";
const router = express.Router();

import rateLimiter from "express-rate-limit";

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, //15 minutes,
  max: 10,
  message: "Too many request for this IP address, try again in 15 minutes",
});

import { register, login, updateUser } from "../controllers/authControllers.js";
import authenticateUser from "../middleware/auth.js";

router.route("/register").post(apiLimiter, register);
router.route("/login").post(apiLimiter, login);
router.route("/updateUser").patch(authenticateUser, updateUser);

export default router;