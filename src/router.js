import { Router } from "express";

import multer from "multer";

import { construir, destruir, sql } from "./db.js";
import { render } from "./render.js";

import { Index } from "./view/Index.js";

import controllerPessoa from "./controller/pessoa.js";
import controllerConcurso from "./controller/concurso.js";
import controllerParticipacao from "./controller/participacao.js";
import controllerVoto from "./controller/voto.js";
import controllerLogin from "./controller/login.js";
import { getAdmin } from "./controller/admin.js";

const concurso = controllerConcurso(sql);
const pessoa = controllerPessoa(sql);
const participacao = controllerParticipacao(sql);
const voto = controllerVoto(sql);
const login = controllerLogin(sql);

export const router = Router();

const upload = multer({ dest: "./public/uploads" });

router.get("/", (_, res) => {
  res.send(
    render(Index, null, { navBar: true })
  );
});

router.get("/administracao", getAdmin);

router.get("/administracao/limpar", async (req, res) => {
  await destruir();
  await construir();
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
router.get("/usuario/novo/familiar/:id", pessoa.getCadastrarFamiliar);
router.post("/usuario/novo/familiar/:id", pessoa.postCadastrarFamiliar);
router.post("/usuario/novo", pessoa.postCadastrar);
router.get("/usuario/lista", pessoa.getLista);

router.get("/login", login.getLogin);
router.post("/login", login.postLogin);

router.get("/logout", (_, res) => {
  res.redirect("/");
});
