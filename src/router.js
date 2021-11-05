import { Router } from "express";

import { db } from "./db.js";
import { render } from "./render.js";

import { Index } from "./view/Index.js";

export const router = Router();

router.get("/", (req, res) => {
  res.send(render(Index, null, { navBar: true }));
});
