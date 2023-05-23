const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { default: axios } = require("axios");
require("dotenv").config();
const PORT = process.env.PORT || 8081;
const app = express();
app.use(cors());
const bp = require("body-parser");
app.use(bp.json());

mongoose.connect(process.env.DATABASE_URL);
const ForumPost = require("./models/ForumPost");

app.get("/", (request, response) => {
  response.json("This is the root route of the Apollo feed backend");
});

function randomInt(min, max) {
  let number = Math.floor(min + Math.random() * (max - min));
  return number;
}

app.get("/song", async (request, response) => {
  let tryAgain = true;
  while (tryAgain === true) {
    let songID = randomInt(1, 2471960);
    try {
      let API = `https://api.genius.com/songs/${songID}?access_token=${process.env.GENIUS_API_ACCESS_TOKEN}`;
      const randomSong = await axios.get(API);
      if (randomSong.data.response.song.song_art_image_url.includes("default") || randomSong.data.response.song.apple_music_id == null || randomSong.data.response.song.release_date == null) {
      } else {
        response.json({
          song_id: randomSong.data.response.song.id,
          title: randomSong.data.response.song.title,
          artist: randomSong.data.response.song.artist_names,
          release_date: randomSong.data.response.song.release_date_for_display,
          album_art: randomSong.data.response.song.song_art_image_url,
        });
        tryAgain = false;
      }
    } catch (error) {}
  }
});

app.get("/forum", async (request, response) => {
  try {
    const ForumPosts = await ForumPost.find(request.query);
    response.json(ForumPosts);
  } catch (error) {
    response.json(`forum loading failed`);
  }
});

app.post("/forum", async (request, response) => {
  const newForumPost = await ForumPost.create(request.body);
  response.json(newForumPost);
});

app.listen(PORT, () => console.log(`App is running on PORT numero ${PORT}`));
