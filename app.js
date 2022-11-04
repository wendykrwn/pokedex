var createError = require("http-errors")
var express = require("express")
var path = require("path")
var cookieParser = require("cookie-parser")
var logger = require("morgan")
const mongoose = require("mongoose")

var indexRouter = require("./routes/index")
const pokemonRouter = require("./routes/pokemon")
const favorisRouter = require("./routes/favoris")

var app = express()

mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.gdn95bb.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to Mongo"))

// view engine setup
app.set("views", path.join(__dirname, "views"))
// app.set('view engine', 'pug');
app.set("view engine", "ejs")

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

app.use("/", indexRouter)
app.use("/pokemon", pokemonRouter)
app.use("/favoris", favorisRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get("env") === "development" ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render("error")
})

module.exports = app
