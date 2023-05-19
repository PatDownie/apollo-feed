const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");
require("dotenv").config();
const PORT = process.env.PORT || 8081;
const app = express();
app.use(cors());

app.get("/", (request, response) => {
  response.json("This is the root route of the Apollo feed backend");
});

function randomInt(min, max) {
  let number = Math.floor(min + Math.random() * (max - min));
  return number;
}

app.get("/song", async (request, response) => {
  let songID = randomInt(1, 489579);
  try {
    let API = `https://api.genius.com/songs/${songID}?access_token=${process.env.GENIUS_API_ACCESS_TOKEN}`;
    const randomSong = await axios.get(API);
    response.json({ title: randomSong.data.response.song.title, song_id: randomSong.data.response.song.id });
  } catch (error) {
    response.json(`song id ${songID} does not exist`);
  }
});

app.listen(PORT, () => console.log(`App is running on PORT numero ${PORT}`));
