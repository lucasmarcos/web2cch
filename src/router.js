import { Router } from "express";

import { db } from "./db.js";
import { render } from "./render.js";

import { Index } from "./view/Index.js";
import { Login } from "./view/Login.js";

// import { CadastrarConcurso } from "./view/concurso/Cadastrar.js";
// import { CadastrarUsuario } from "./view/usuario/Cadastrar.js";

import controllerConcurso from "./controller/concurso.js";

const concurso = controllerConcurso(db);

export const router = Router();

router.get("/", (req, res) => {
  res.send(
    render(Index, null, { navBar: true })
  );
});

router.get("/login", (req, res) => {
  res.send(
    render(Login, null, { navBar: false, titulo: "Login" })
  );
});


//  res.send(render(CadastrarConcurso, null, { navBar: true }));
router.get("/concurso/novo", concurso.getCadastrar);
router.post("/concurso/novo", concurso.postCadastrar);
router.get("/concurso/listar", concurso.getListar);
