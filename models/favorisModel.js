const mongoose = require("mongoose")

const favorisSchema = new mongoose.Schema({
  number: Number,
  comment: String,
  isOwned: Boolean,
  name: String
})

const Favoris = mongoose.model("Favoris", favorisSchema)

module.exports = Favoris
