var express = require("express")
var router = express.Router()
const {pokemon} = require("../controllers/pokemonController")
const {index} = require("../controllers/indexController")


router.get("/", index)
router.get("/:id", pokemon)


module.exports = router
