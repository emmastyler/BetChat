const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    body: { type: String, required: true },
    owner: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
