const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  yearOfPublication: { type: String, required: true },
  genre: String,
  language: String,
  series: String,
})

module.exports = mongoose.model("Book", bookSchema);