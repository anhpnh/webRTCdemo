let express = require("express");
let app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

let server = require("http").Server(app);
let io = require("socket.io")(server);

server.listen(process.env.PORT || 3000);
console.log("Server started");

app.get('/', (req, res) => {
    res.render('home');
});