import express from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const PORT = 5000;

// Define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.resolve(__dirname, "./dist", "index.html");

const app = express();

app.get("/", (req, res) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(
        /__TITLE__/g,
        "Nodirbek Makhmudov - Front-End Developer Portfolio"
      )
      .replace(
        /__DESCRIPTION__/g,
        "Welcome to the portfolio of Nodirbek Makhmudov, a skilled front-end developer passionate about crafting beautiful and functional web experiences. Explore my projects and skills here."
      );

    res.send(data);
  });
});

app.get("/about", (req, res) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "About Page")
      .replace(/__DESCRIPTION__/g, "About page description.");

    res.send(data);
  });
});

app.use(express.static(path.resolve(__dirname, "./dist")));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
