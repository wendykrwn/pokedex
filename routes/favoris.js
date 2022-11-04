var express = require("express")
var router = express.Router()
const {
  index,
  create,
  updateFavoris,
  deleteFavoris,
  findFavoris
} = require("../controllers/favorisController")

/* GET home page. */
router.get("/", index)
router.get("/:number", findFavoris)
router.get("/delete/:number", deleteFavoris)
router.post("/", create)
router.post("/update/:number", updateFavoris)



module.exports = router
