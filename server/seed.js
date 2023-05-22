const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL);

const ForumPost = require("./models/ForumPost");

async function seed() {
  await ForumPost.create({
    song_id: 69,
    title: "The responsive song",
    artist: "Chris Seaman",
    release_date: "2023-04-28",
    album_art: "https://assets.genius.com/images/default_cover_image.png?1684337696",
    poster_name: "Tim",
    forum_post: "This song was great!!!! Best song ever. Very inspiring.",
  });
  mongoose.disconnect();
}

seed();
