/*
You DONT have to import the Movie with your username.
Because it's a default export we can nickname it whatever we want.
So import Movie from "./models"; will work!
You can do Movie.find() or whatever you need like normal!
*/
import Movie from "./models/Movie";

// Add your magic here!
export const home = async (req, res) => {
    const movies = await Movie.find({});
    res.render("home", { pageTitle: "Home", movies });
};

export const getCreateMovie = (req, res) => {
    res.render("createMovie", { pageTitle: "Create", action: "/create" });
};

export const postCreateMovie = async (req, res) => {
    const {
        body: { title, year, rating, synopsis, genres },
    } = req;
    const createMovie = await Movie.create({
        title,
        year,
        rating,
        synopsis,
        genres: genres.split(","),
    });
    console.log(createMovie);
    res.redirect(`/${createMovie.id}`);
};

export const detailMovie = async (req, res) => {
    const {
        params: { id },
    } = req;
    const movie = await Movie.findById(id);

    res.render("detailMovie", { pageTitle: movie.title, movie });
};
