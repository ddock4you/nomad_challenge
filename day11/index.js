import express from "express";
import movieRouter from "./movieRouter";

const app = express();
const localMiddleware = (req, res, next) => {
    res.locals.siteName = "Nomad Movies";
    next();
};

app.set("view engine", "pug");
app.use("/", localMiddleware, movieRouter);

app.listen(3000, () => console.log("hello"));
