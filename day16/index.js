import express from "express";
import { localsMiddleware } from "./middlewares";
import movieRouter from "./movieRouter";

const app = express();

app.set("view engine", "pug");
app.use(express.urlencoded({ extended: true }));
app.use(localsMiddleware);
app.use("/", movieRouter);

app.listen(3000, () => console.log("hello"));

/*
    조건
    - You need to create the route, controller and .pug template for the page /add.
    - The /add page should be a form with three inputs: title, synopsis, genres. title and genres should be inputs and synopsis should be a text area.
    - This form should POST to a page with a controller that calls the addMovie function and adds the movie with the fields from the form.
    - The addMovie function takes one argument, that argument should be an object containing title, synopsis, genres.

    - After the movie is created the user should be redirected back to /
    - Do everything in maximum TWO controllers.
    - The form has to do a POST request.
    - Use .pug
    - You need to take the genres input from the frontend and learn how to turn it into an array on the backend. Separate it by commas ( , ) Drama, Comedy, Accion -> ["Drama", "Comedy", "Action"]
    - Not allowed to type the array from the frontend.
    - The app must behave exactly like the video
    - IF ANY OF THE REQUIREMENTS ARE NOT FULFILLED YOU WILL GET AN ❌
*/
