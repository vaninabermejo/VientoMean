"use strict";
let app = require("./server/routes");
//start the server
let server =  app.listen(8000, function(){
  console.log("listenning on port %d", server.address().port);
});
