import express from "express";
import { genresModel } from "../models/genresModel.js";

export const genresController = express.Router();

genresController.use(express.urlencoded({ extended: true }));

genresController.get("/genres", async (req, res) => {
    const data = await genresModel.getAllGenres();
    res.status(200).json(data);
});

genresController.get("/genres/:id([0-9A-Za-z]*)", async (req, res) => {
    const genre = await genresModel.getGenreById(req.params.id);
    res.status(200).json(genre);
});

genresController.post("/genres", async (req, res) => {
    const data = await genresModel.createGenre(req.body);
    res.status(201).json(data);
});

genresController.put("/genres", async (req, res) => {
    const data = await genresModel.updateGenre(req.body);
    res.status(201).json(data);
});

genresController.delete("/genres", async (req, res) => {
    const data = await genresModel.deleteGenre(req.body);
    res.status(200).json(data);
});
