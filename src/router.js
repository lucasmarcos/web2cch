import { Router } from "express";

import multer from "multer";

import { sql } from "./db.js";
import { render } from "./render.js";

import { Index } from "./view/Index.js";
import { Login } from "./view/Login.js";

import controllerPessoa from "./controller/pessoa.js";
import controllerConcurso from "./controller/concurso.js";
import controllerParticipacao from "./controller/participacao.js";
import controllerVoto from "./controller/voto.js";
import { getAdmin } from "./controller/admin.js";

const concurso = controllerConcurso(sql);
const pessoa = controllerPessoa(sql);
const participacao = controllerParticipacao(sql);
const voto = controllerVoto(sql);

export const router = Router();

const upload = multer({ dest: "./public/uploads" });

router.get("/", (_, res) => {
  res.send(
    render(Index, null, { navBar: true })
  );
});

router.get("/login", (req, res) => {
  res.send(
    render(Login, null, { navBar: false, titulo: "Login" })
  );
});

router.get("/logout", (_, res) => {
  res.redirect("/");
});

router.get("/administracao", getAdmin);

router.get("/administracao/limpar", async (req, res) => {
  await sql`DROP TABLE voto;`;
  await sql`DROP TABLE participacao;`;
  await sql`DROP TABLE concurso;`;
  await sql`DROP TABLE pessoa;`;
  await sql`DROP TABLE configuracao;`;

  res.redirect("/");
});

router.get("/concurso/novo", concurso.getCadastrar);
router.post("/concurso/novo", concurso.postCadastrar);
router.get("/concurso/lista", concurso.getListar);
router.get("/concurso/:id", concurso.getDetalhes);

router.get("/concurso/:concurso/participacao/:id", participacao.getDetalhes);
router.get("/concurso/:id/participar", participacao.getCadastrar);
router.post("/concurso/:id/participar", participacao.postCadastrar);

router.get("/votar/:id", voto.getIndex);
router.get("/votar/novo/:id", voto.getNovoVoto);

router.get("/usuario/novo", pessoa.getCadastrar);
router.post("/usuario/novo", pessoa.postCadastrar);
router.get("/usuario/lista", pessoa.getLista);
