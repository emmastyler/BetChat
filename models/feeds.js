const mongoose = require("mongoose");

const feedsSchema = new mongoose.Schema(
  {
    feeds: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Feeds", feedsSchema);
