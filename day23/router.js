import express from "express";
import { home, postRead } from "./controller";
import { uploadFile } from "./middlewares";

export const router = express.Router();

router.get("/", home);
router.post("/read", uploadFile, postRead);
