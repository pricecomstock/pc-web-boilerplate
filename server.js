var express = require("express");
var api = require("./router.js").router;
var serveStatic = require("serve-static");

var app = express();
app.use(serveStatic(__dirname + "/dist"));

/*STATIC ROUTES*/
// app.use("/textures", serveStatic(__dirname + "/dist/textures"));

/* CORS */
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

// Use routes in router.js for API
app.use("/api", api);

/* FAVICON */
app.get("/favicon.ico", function(req, res) {
  //   console.log("favicon GET");
  res.sendFile(__dirname + "/dist/favicon.ico");
});

// TODO: make it so incorrect API calls don't fall through to vue-router
// Everything else should fall through to vue-router
app.get("/*", function(req, res) {
  res.sendFile(__dirname + "/dist/index.html");
});

var port = process.env.PORT || 5000;
app.listen(port);

// console.log("server started " + port);
