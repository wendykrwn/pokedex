const Favoris = require('../models/favorisModel');


const index = (req, res) => { 
    Favoris.find((err, favoris) => {
        res.status(200).render('favoris', { favoris })
    })
}

const create = (req, res) => {
  // const { name } = req.params
  const { number, comment, isOwned,name } = req.body
  Favoris.create({ number, name, comment, isOwned : isOwned == "on" ? true:false })
    .then((pokemon) => {
      res.status(201).json(pokemon)
    })
    .catch((err) => res.status(500).json(err))
}

module.exports = {
  index,
  create
}