import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const env = process.env;

app.get("/", (req, res) => {
    res.send("Velkommen til API");
});

import { postersController } from "./controllers/postersController.js";
app.use(postersController);
import { genresController } from "./controllers/genresController.js";
app.use(genresController);
import { cartLinesController } from "./controllers/cartLinesController.js";
app.use(cartLinesController);
import { genPosRelController } from "./controllers/genPosRelController.js";
app.use(genPosRelController);

app.listen(env.PORT, () => {
    console.log(`Express server kører på http://localhost:${env.PORT}`);
});
