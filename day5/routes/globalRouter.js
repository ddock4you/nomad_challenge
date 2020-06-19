import express from "express";
import {
    root,
    join,
    login,
    confirmAccount,
} from "../controllers/globalController";

export const globalRouter = express.Router();

globalRouter.get("/", root);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/confirm-account", confirmAccount);
