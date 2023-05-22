const mongoose = require("mongoose");

const { Schema } = mongoose;
// same as Schema = mongoose.Schema

const forumPostSchema = new Schema({
  song_id: Number,
  title: String,
  artist: String,
  release_date: String,
  album_art: String,
  poster_name: String,
  forum_post: String,
});

const ForumPost = mongoose.model("ForumPost", forumPostSchema);

module.exports = ForumPost;
