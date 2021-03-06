const discord = require("discord.js");
const client = new discord.Client();

var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}));
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs")
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  res.render("index", {client: client})
});

var listeners = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listeners.address().port)
});

client.login(token)
client.on('ready', async () => {
 console.log(`${client.user.tag} online`)
});

