/*
You DONT have to import the Movie with your username.
Because it's a default export we can nickname it whatever we want.
So import Movie from "./models"; will work!
You can do Movie.find() or whatever you need like normal!
*/
import Movie from "./models/Movie";

// Add your magic here!
export const home = async (req, res) => {
    try {
        const movies = await Movie.find({});
        res.render("home", { pageTitle: "Home", movies });
    } catch (error) {
        console.log(error);
    }
};

export const getCreateMovie = (req, res) => {
    res.render("createMovie", { pageTitle: "Create", action: "/create" });
};

export const postCreateMovie = async (req, res) => {
    try {
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
    } catch (error) {
        console.log(error);
        res.redirect("/");
    }
};

export const detailMovie = async (req, res) => {
    try {
        const {
            params: { id },
        } = req;
        const movie = await Movie.findById(id);
        if (!movie) {
            return res.render("404", { pageTitle: "Movie not found" });
        }
        res.render("detailMovie", { pageTitle: movie.title, movie });
    } catch (error) {
        console.log(error);
        res.redirect("/");
    }
};

export const searchMovie = async (req, res) => {
    try {
        const {
            query: { year, rating },
        } = req;
        if (year) {
            let movies = await Movie.find().where("year").gte(year);
            res.render("home", { movies });
        } else if (rating) {
            let movies = await Movie.find().where("rating").gte(rating);
            res.render("home", { movies });
        }
    } catch (error) {
        console.log(error);
    }
};

export const getEditMovie = async (req, res) => {
    try {
        const {
            params: { id },
        } = req;
        const movie = await Movie.findById(id);
        res.render("editMovie", {
            pageTitle: movie.title,
            action: `/${id}/edit`,
            movie,
        });
    } catch (error) {
        console.log(error);
    }
};

export const postEditMovie = async (req, res) => {
    try {
        const {
            params: { id },
        } = req;
        const {
            body: { title, year, rating, synopsis, genres },
        } = req;
        await Movie.findOneAndUpdate(
            { _id: id },
            { title, year, rating, synopsis, genres }
        );
        res.redirect(`/${id}`);
    } catch (error) {
        console.log(error);
        res.redirect("/");
    }
};

export const deleteMovie = async (req, res) => {
    try {
        const {
            params: { id },
        } = req;
        await Movie.findOneAndDelete(id);
    } catch (error) {
        console.log(error);
    }
    res.redirect("/");
};
