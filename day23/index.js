import express from "express";
import { router } from "./router";

const app = express();

app.set("view engine", "pug");
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

app.listen(3000, () => console.log("hello"));
/*
    The page / should have a form where the user can upload a .txt file.
    Upload a file using multer, read the contents using fs and render another template showing the user the contents of the file.

    https://codesandbox.io/s/txt2html-t79bh

    답안지
    https://codesandbox.io/s/txt2html-solution-0wb76
*/
