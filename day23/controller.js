import fs from "fs";

export const home = (req, res) => {
    res.render("home");
};

export const postRead = (req, res) => {
    const {
        file: { path },
    } = req;
    const textContent = fs.readFileSync(path, "utf8");
    console.log(textContent);
    res.render("read", { textContent });
};
