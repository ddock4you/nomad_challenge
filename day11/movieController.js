import {
    getMovieById,
    getMovies,
    getMovieByMinimumRating,
    getMovieByMinimumYear,
} from "./db";

export const home = (req, res) => {
    const movies = getMovies();
    res.render("movies", { subTitle: "movies!", movies });
};
export const movieDetail = (req, res) => {
    const movies = getMovieById(req.params.id);
    res.render("detail", { subTitle: movies.title, movies });
};
export const filterMovie = (req, res) => {
    let type = null;
    let movies = null;

    if (req.query.rating) {
        type = `rating:${req.query.rating}`;
        movies = getMovieByMinimumRating(req.query.rating);
    }
    if (req.query.year) {
        type = `year:${req.query.year}`;
        movies = getMovieByMinimumYear(req.query.year);
    }
    res.render("movies", { subTitle: `searching By ${type}`, movies });
};
