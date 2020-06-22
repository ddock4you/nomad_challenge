import express from "express";
import { home, login, photos, profile } from "../controllers";

export const routers = express.Router();

routers.get("/", home);
routers.get("/login", login);
routers.get("/photos", photos);
routers.get("/profile", profile);
