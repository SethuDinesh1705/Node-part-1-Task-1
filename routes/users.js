import express from "express";
import {
  getUser,
  createUser,
  getUserId,
  deleteUser,
  updateUser,
} from "../controllers/users.js";
const router = express.Router();

//const { createAuthentication } = require("../middleware/userschema.js");
import { createauthentication } from "../middleware/userschema.js";
router.get("/", getUser);

router.post("/", createauthentication, createUser);

router.get("/:id", getUserId);

router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);
export default router;
