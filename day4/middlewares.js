export const commonMiddle = (req, res, next) => {
    console.log("I'm a middleware");
    next();
};

export const rootRedirect = (req, res) => {
    res.redirect("/");
};
