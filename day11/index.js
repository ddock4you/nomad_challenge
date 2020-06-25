import express from "express";
import movieRouter from "./movieRouter";

const app = express();

app.set("view engine", "pug");
app.use("/", movieRouter);

app.listen(3000, () => console.log("hello"));
