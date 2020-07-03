import express from "express";
import {
    home,
    getCreateMovie,
    postCreateMovie,
    detailMovie,
} from "./movieController";

const movieRouter = express.Router();

// Add your magic here!
movieRouter.get("/", home);
movieRouter.get("/create", getCreateMovie);
movieRouter.post("/create", postCreateMovie);
movieRouter.get("/:id", detailMovie);

export default movieRouter;
