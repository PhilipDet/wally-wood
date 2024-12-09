import express from "express";
import { userRatingModel } from "../models/userRatingModel.js";

export const userRatingController = express.Router();

userRatingController.get("/user-ratings", async (req, res) => {
    const data = await userRatingModel.getAllUserRatings();
    res.status(200).json(data);
});

userRatingController.get(
    "/user-ratings/:id([0-9A-Za-z]*)",
    async (req, res) => {
        const userRating = await userRatingModel.getUserRatingById(
            req.params.id
        );
        res.status(200).json(userRating);
    }
);

userRatingController.post("/user-ratings", async (req, res) => {
    const data = await userRatingModel.createUserRating(req.body);
    res.status(201).json(data);
});

userRatingController.put("/user-ratings", async (req, res) => {
    const data = await userRatingModel.updateUserRating(req.body);
    res.status(201).json(data);
});

userRatingController.delete("/user-ratings", async (req, res) => {
    const data = await userRatingModel.deleteUserRating(req.body);
    res.status(200).json(data);
});
