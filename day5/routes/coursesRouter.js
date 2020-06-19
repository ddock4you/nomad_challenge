import express from "express";
import {
    courses,
    coursesMine,
    coursesNew,
} from "../controllers/courseController";

export const courseRouter = express.Router();

courseRouter.get("/", courses);
courseRouter.get("/new", coursesNew);
courseRouter.get("/mine", coursesMine);
