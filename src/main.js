import Express from "express";

import { router } from "./router.js";

const server = Express();

server.use(router);

const HOST = "0.0.0.0",
      PORT = 3031;

server.listen(PORT, HOST, err => {
  if (err) {
    console.log(`erro: ${err}`);
  }

  console.log(`servidor aberto em http://${HOST}:${PORT}`);
});
