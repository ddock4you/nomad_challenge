import express from "express";

export const customRouter = express.Router();

customRouter.get("/", (req, res) => res.send("Root"));
customRouter.get("/about-us", (req, res) => res.send("About Us"));
customRouter.get("/contact", (req, res) => res.send("Contact"));
customRouter.get("/protected", (req, res) => res.redirect("/"));
