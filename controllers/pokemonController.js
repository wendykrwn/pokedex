const index = (req, res) => {
  const {id} = req.params
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then((data) => {
      res.render("pokemon", {
        title: "Pokedex",
        pokemon: data,
      })
    })
}

module.exports = {
  index,
}
