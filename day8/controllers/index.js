export const home = (req, res) => res.render("home", { title: "home" });
export const login = (req, res) => res.render("login", { title: "login" });
export const photos = (req, res) => res.render("photos", { title: "photos" });
export const profile = (req, res) =>
    res.render("profile", { title: "profile" });
