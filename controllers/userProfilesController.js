import express from "express";
import { userProfilesModel } from "../models/userProfilesModel.js";

export const userProfilesController = express.Router();

userProfilesController.use(express.urlencoded({ extended: true }));

userProfilesController.get("/user-profiles", async (req, res) => {
    const data = await userProfilesModel.getAllUserProfiles();
    res.status(200).json(data);
});

userProfilesController.get(
    "/user-profiles/:id([0-9A-Za-z]*)",
    async (req, res) => {
        const userProfile = await userProfilesModel.getUserProfileById(
            req.params.id
        );
        res.status(200).json(userProfile);
    }
);

userProfilesController.post("/user-profiles", async (req, res) => {
    const data = await userProfilesModel.createUserProfile(req.body);
    res.status(201).json(data);
});

userProfilesController.put("/user-profiles", async (req, res) => {
    const data = await userProfilesModel.updateUserProfile(req.body);
    res.status(201).json(data);
});

userProfilesController.delete("/user-profiles", async (req, res) => {
    const data = await userProfilesModel.deleteUserProfile(req.body);
    res.status(200).json(data);
});
