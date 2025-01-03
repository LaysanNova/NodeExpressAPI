import express from "express";
import { getUsers, postUsers, getUserById, deleteUserById, patchUserById } from "../controllers/users.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", postUsers);
router.get("/:id", getUserById);
router.delete("/:id", deleteUserById);
router.patch("/:id", patchUserById);

export default router;