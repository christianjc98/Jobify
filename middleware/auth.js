import { UnAuthenticatedError } from "../errors/index.js";
import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    throw new UnAuthenticatedError("Authentication invalid");
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const testUser = payload.userId === "63b33db80d23ad80aeee866a";
    req.user = { userId: payload.userId, testUser };

    next();
  } catch (error) {
    throw new UnAuthenticatedError("Authentication invalid");
  }
};
export default auth;
