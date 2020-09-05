var express = require("express");

// Get the port
const PORT = process.env.PORT || 3000;

// Create express server
const server = express();

// Set up server properties
//server.use("/dist", express.static("dist/"));

// Tell express that when it sees /public make it translate it to __dirname + /public
server.use("/public", express.static(__dirname + "/../public"));

// Send neccessary files server->client
server.get("/public/images/:id", (req, res) => {
  // log the activity to the server console
  console.log('server.get("/public/images/:id") [html request]');

  res.sendFile(__dirname + "/public/images" + req.params.id);
});

// Send neccessary files server->client
server.get("/public/css/:id", (req, res) => {
  // log the activity to the server console
  console.log('server.get("/public/css/:id") [html request]');
  console.log(__dirname);

  res.sendFile(__dirname + "/public/css/" + req.params.id);
});

// Getting "/"
server.get("/", (req, res) => {
  console.log("get request to /");

  res.sendFile("index.html", { root: __dirname });
});

server.listen(PORT, console.log("Server on."));
