const express = require("express");
const app = express();
const fetch = require("node-fetch");
const path = require("path");
require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const apiKey = process.env.DARK_SKY_KEY;

app.post("/", function (req, res) {
  const { lat, lng } = req.body;
  let url = `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});
