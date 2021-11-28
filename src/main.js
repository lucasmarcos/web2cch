import Express from "express";

import { router } from "./router.js";

const server = Express();

server.use(Express.urlencoded({ extended: false }));

server.use(router);

server.use("/public", Express.static("./public"));

const HOST = "0.0.0.0",
      PORT = 3031;

server.listen(PORT, HOST, err => {
  if (err) {
    console.log(`erro: ${err}`);
  } else {
    console.log(`servidor aberto em http://${HOST}:${PORT}`);
  }
});
