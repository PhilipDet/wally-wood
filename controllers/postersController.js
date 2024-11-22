import express from "express";
import { postersModel } from "../models/posterModel.js";

export const postersController = express.Router();

postersController.use(express.urlencoded({ extended: true }));

postersController.get("/posters", async (req, res) => {
    const data = await postersModel.getAllPosters();
    res.status(200).json(data);
});

postersController.get("/posters/:id([0-9]*)", async (req, res) => {
    const poster = await postersModel.getPosterById(req.params.id);
    res.status(200).json(poster);
});

postersController.post("/posters", async (req, res) => {
    const data = await postersModel.createPoster(req.body);
    res.status(201).json(data);
});

postersController.put("/posters", async (req, res) => {
    const data = await postersModel.updatePoster(req.body);
    res.status(201).json(data);
});

postersController.delete("/posters", async (req, res) => {
    const data = await postersModel.deletePoster(req.body);
    res.status(200).json(data);
});
