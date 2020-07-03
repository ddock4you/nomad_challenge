import express from "express";
import "./db";
import movieRouter from "./movieRouter";
import { localsMiddleware } from "./middlewares";

const app = express();

app.set("view engine", "pug");
app.use(express.urlencoded({ extended: true }));
app.use(localsMiddleware);
app.use("/", movieRouter);

app.listen(3000, () => console.log("hello"));
