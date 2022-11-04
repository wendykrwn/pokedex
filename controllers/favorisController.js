const Favoris = require('../models/favorisModel');


const index = (req, res) => { 
    Favoris.find((err, favoris) => {
        res.status(200).render('mesfavoris', { favoris })
    })
}

const findFavoris = (req, res) => {
  const {number} = req.params
  Favoris.findOne({ number }, (err, pokemon) => {
    if (err) res.status(500).json({ err, message: "Unable to find pokemon" }) // Si erreur, renvoyer un code 500 et l'erreur
    if (pokemon === null){
      res.render("message", {
        message: "Désolé nous n'avons pas trouvé de pokemon",
      })
    }
    else {
      fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`)
        .then(res => res.json())
        .then(data => {
          res.render("oneFavoris", {
            title: "Pokedex",
            pokemon: data,
            favoris: pokemon
          })
        }
        )
    }
  })
}

const create = (req, res) => {
  const { number, comment, isOwned = false, name } = req.body

  Favoris.findOne({ number }, (err, pokemon) => {
    if (pokemon !== null) {
      res.render("message", {
        message: "Désolé ce pokemon est déjà dansles favoris",
      })
    } else {
      Favoris.create({
        number,
        name,
        comment,
        isOwned: isOwned == "on" || isOwned == true ? true : false,
      })
        .then((pokemon) => {
          res.render("message", {
            message: `${pokemon.name} a bien été ajouté au favoris`
          })
        })
        .catch((err) => res.status(500).json(err))
    }
  })
}

const updateFavoris = (req, res) => {
  const {number} = req.params
  const { comment, isOwned = false } = req.body
    
  Favoris.updateOne(
    { number },
    {
      comment,
      isOwned: (isOwned == "on" || isOwned == true) ? true : false
    }
    , (err, pokemon) => {
      if (err) res.status(500).json({ err, message: "Unable to update pokemon" }) // Si erreur, renvoyer un code 500 et l'erreur
      if (pokemon === null) {
         res.render("message", {
           message: "Désolé nous n'avons pas trouvé de pokemon",
         })
      }
      else{
        res.render("message", {
          message: `Le pokemon a bien été modifié`
        })
      }
    }
  )
  
}

const deleteFavoris = (req, res) => {
  const { number } = req.params
  
  Favoris.findOne({ number }, (err, pokemon) => {
    if (err) res.status(500).json({ err, message: "Unable to find pokemon" }) // Si erreur, renvoyer un code 500 et l'erreur
    if (pokemon === null) {
      res.render("message", {
        message: "Désolé ce pokemon n'existe pas dans les favoris",
      })
    } else {
  Favoris.deleteOne(
    {
      number,
    },
    (err, pokemon) => {
      if (err)
        res.status(500).json({ err, message: "Unable to delete pokemon" }) // Si erreur, renvoyer un code 500 et l'erreur
      if (pokemon === null) {
        res.render("message", {
          message: "Désolé nous n'avons pas trouvé de pokemon",
        })
      } else {
        res.render("message", {
          message: `Le pokemon a bien été supprimé`,
        })
      }
    }
    )
    }
  })
}

module.exports = {
  index,
  create,
  updateFavoris,
  deleteFavoris,
  findFavoris,
}
