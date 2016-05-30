"use strict";
let express = require("express");
let app =  express();

//load express configuration
require("./expressConfig")(app, express);

//root route
app.get("/", function(req, res){
  res.sendfile("index.html",{root:app.settings.views});
});

//load routes
require("./routes/user")(app); //user routes

module.exports =  app;
