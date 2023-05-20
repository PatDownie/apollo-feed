const mongoose = require("mongoose");

const { Schema } = mongoose;
// same as Schema = mongoose.Schema

const forumPostSchema = new Schema({
  title: String,
  description: String,
  status: String,
});

const ForumPost = mongoose.model("forumPost", forumPostSchema);

module.exports = ForumPost;
