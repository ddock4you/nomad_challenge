import express from "express";
import { globalRouter } from "./routes/globalRouter";
import { courseRouter } from "./routes/coursesRouter";
import { apiRouter } from "./routes/apiRouter";

const app = express();
const nothing = (req, res, next) => {
    res.send("x");
    next();
};

app.listen(3000, () => console.log("hello"));

app.use("/", globalRouter);
app.use("/courses", courseRouter);
app.use("/api", apiRouter);
app.use("/api/v1", apiRouter);
app.use("/api/v2", apiRouter);

app.use(nothing);

/*
    Challenge goals
    /
    /join
    /login
    /confirm-account

    /courses
    /courses/new
    /courses/mine

    /api/documentation

    /api/v1/buy
    /api/v1/refund
    
    /api/v2/remove
    /api/v2/edit

    조건
    - Those URLs should be divided in FIVE different routers.
    - Each route needs to have a controller function imported from a "controllers" file.
    - NO Anonymous functions allowed. Every route should have a controller.
    - IF ANY OF THE REQUIREMENTS ARE NOT FULFILLED YOU WILL GET AN "X"

    
    https://codesandbox.io/s/express-blueprint-opigd

    답안지
    https://codesandbox.io/s/day-five-solution-rkcyp
*/
