import express from "express";
import { cartLinesModel } from "../models/cartLinesModel.js";

export const cartLinesController = express.Router();

cartLinesController.get("/cart-lines", async (req, res) => {
    const data = await cartLinesModel.getAllCartLines();
    res.status(200).json(data);
});

cartLinesController.get("/cart-lines/:id([0-9A-Za-z]*)", async (req, res) => {
    const cartLine = await cartLinesModel.getCartLineById(req.params.id);
    res.status(200).json(cartLine);
});

cartLinesController.post("/cart-lines", async (req, res) => {
    const data = await cartLinesModel.createCartLine(req.body);
    res.status(201).json(data);
});

cartLinesController.put("/cart-lines", async (req, res) => {
    const data = await cartLinesModel.updateCartLine(req.body);
    res.status(201).json(data);
});

cartLinesController.delete("/cart-lines", async (req, res) => {
    const data = await cartLinesModel.deleteCartLine(req.body);
    res.status(200).json(data);
});
