import {
    getMovieById,
    getMovies,
    getMovieByMinimumRating,
    getMovieByMinimumYear,
} from "./db";

export const home = (req, res) => {
    const movies = getMovies();
    // console.dir(movies);
    res.render("movies", { movies });
};
export const movieDetail = (req, res) => {
    const movies = getMovieById(req.params.id);
    console.log(movies);
    res.render("detail", { movies });
};
export const filterMovie = (req, res) => {};
