var express = require("express")
var router = express.Router()
const {index,create} = require("../controllers/favorisController")

/* GET home page. */
router.get("/", index)
router.post("/", create)



module.exports = router
