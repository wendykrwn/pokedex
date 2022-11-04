const index = (req, res) => {

  fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((res) => res.json())
    .then((data) => {
      res.render("index", {
        title: "Pokedex",
        pokemon: data.results,
      })
    })
}

module.exports = {
  index,
}
