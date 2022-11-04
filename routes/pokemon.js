var express = require("express")
var router = express.Router()
const indexController = require("../controllers/pokemonController")

/* GET home page. */
router.get("/:id", indexController.index)


module.exports = router
