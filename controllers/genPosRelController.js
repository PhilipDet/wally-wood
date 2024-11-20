import express from "express";
import { genPosRelModel } from "../models/genPosRelModel.js";

export const genPosRelController = express.Router();

genPosRelController.use(express.urlencoded({ extended: true }));

genPosRelController.get("/gen-pos-rel", async (req, res) => {
    const data = await genPosRelModel.getAllGenPosRel();
    res.status(200).json(data);
});

genPosRelController.get("/gen-pos-rel/:id([0-9A-Za-z]*)", async (req, res) => {
    const genPosRel = await genPosRelModel.getGenPosRelById(req.params.id);
    res.status(200).json(genPosRel);
});

genPosRelController.post("/gen-pos-rel", async (req, res) => {
    const data = await genPosRelModel.createGenPosRel(req.body);
    res.status(201).json(data);
});

genPosRelController.put("/gen-pos-rel", async (req, res) => {
    const data = await genPosRelModel.updateGenPosRel(req.body);
    res.status(201).json(data);
});

genPosRelController.delete("/gen-pos-rel", async (req, res) => {
    const data = await genPosRelModel.deleteGenPosRel(req.body);
    res.status(200).json(data);
});
