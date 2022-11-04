const mongoose = require("mongoose")

const favorisSchema = new mongoose.Schema({
  number: {
    type: Number,
    unique: true
  },
  comment: String,
  isOwned: Boolean,
  name: String
})

const Favoris = mongoose.model("Favoris", favorisSchema)

module.exports = Favoris
