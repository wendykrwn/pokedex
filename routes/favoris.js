var express = require("express")
var router = express.Router()
const {
  index,
  create,
  updateFavoris,
  deleteFavoris
} = require("../controllers/favorisController")

/* GET home page. */
router.get("/", index)
router.get("/delete/:number", deleteFavoris)
router.post("/", create)
router.put("/", updateFavoris)



module.exports = router
