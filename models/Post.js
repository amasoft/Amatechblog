const mongoose = require("mongoose");
const PostSchema = new mongoose.Schema(
  {
    post_title: {
      type: String,
      required: true,
      unique: true,
    },
    post_content: {
      type: String,
      required: true,
    },
    post_image: {
      type: String,
      required: true,
    },
    author_id: {
      type: String,
      required: true,
    },
    author_name: {
      type: String,
      required: true,
    },
    post_category: {
      type: String,
      required: true,
    },
    post_status: {
      type: String,
      required: true,
    },
    totalcomments: {
      type: Number,
      required: false,
    },
    post_date: {
      type: Date,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Post_Table", PostSchema);
