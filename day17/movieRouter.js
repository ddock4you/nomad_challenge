import express from "express";
import {
    home,
    getCreateMovie,
    postCreateMovie,
    detailMovie,
    searchMovie,
    getEditMovie,
    postEditMovie,
    deleteMovie,
} from "./movieController";

const movieRouter = express.Router();

// Add your magic here!
movieRouter.get("/", home);
movieRouter.get("/search", searchMovie);
movieRouter.get("/create", getCreateMovie);
movieRouter.post("/create", postCreateMovie);
movieRouter.get("/:id", detailMovie);
movieRouter.get("/:id/edit", getEditMovie);
movieRouter.post("/:id/edit", postEditMovie);
movieRouter.get("/:id/delete", deleteMovie);

export default movieRouter;
