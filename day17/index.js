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

/*

    - Using Mongoose, create a CRUD (Create, Read, Delete, Update) Application for Movies.
    - Make all the six routes with their controllers.
    - On the line 12 of models/Movie.js you have to create a complete schema for your movie model. The schema should have the fields id, title, year, rating, synopsis, genres[], uploadedAt
    - All the fields are required.
    - You need to validate that the year is a number.
    - You need to validate that the title is at least 3 characters long.
    - When I create a movie I should be redirected to the detail page of that movie.
    - When a movie is not found I should see a 404.
    - When I delete a movie I should be redirected to the home page.
    - On the /search page I should be able to filter by greater than or equal ( $gte ) /search?year=1900 or /search?rating=9.6
    - The app must behave exactly like the video
    - IF ANY OF THE REQUIREMENTS ARE NOT FULFILLED YOU WILL GET AN ❌

    https://codesandbox.io/s/day-17-18-19-blueprint-4x8xp


*/
