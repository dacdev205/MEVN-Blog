const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
    title: String,
    category: String,
    content: String,
    image: String,
    author: String,
    created: {
      type: Date,
      default: Date.now()
    },
});

module.exports = mongoose.model("Blog", blogSchema)