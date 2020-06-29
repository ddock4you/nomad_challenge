import express from "express";
import movieRouter from "./movieRouter";

const app = express();

app.set("view engine", "pug");
app.use("/", localMiddleware, movieRouter);

app.listen(3000, () => console.log("hello"));

/*
    함수 설명
    - getMovies returns an array of movies, console.log the result to see the shape of the object.
    - getMovieById returns a movie object. It requires an ID as an argument and if no movie is found it returns undefined.
    - getMovieByMinimumRating returns an array of movies, it requires a number, with this number the function will return an array of movies with a rating equal or higher than the number.
    - getMovieByMinimumYear returns an array of movies, it requires a number, with this number the function will return an array of movies with a release date equal or higher than the number.

    조건
    - Complete all the controllers
    - Use pug and mixins to render pages and loop over the movies list.
    - Use templates.
    - You can only have 3 .pug pages. movies.pug, 404.pug, detail.pug
    - Use middlewares to add locals like siteTitle
    - / should render movies.pug and show a list of movies.
    - /:id should render the detail of a movie
    - /filter should filter by year and rating.
    - The app must behave exactly like the video
    - IF ANY OF THE REQUIREMENTS ARE NOT FULFILLED YOU WILL GET AN ❌

    https://codesandbox.io/s/express-controller-blueprint-23w25

    답안지
    https://codesandbox.io/s/day-11-12-solution-i7mvm
*/
