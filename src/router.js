import { Router } from "express";

import { sql } from "./db.js";
import { render } from "./render.js";

import { Index } from "./view/Index.js";
import { Login } from "./view/Login.js";
import { Administracao } from "./view/admin/Painel.js";

import controllerConcurso from "./controller/concurso.js";
import controllerPessoa from "./controller/pessoa.js";
import controllerParticipacao from "./controller/participacao.js";
import controllerVoto from "./controller/voto.js";

const concurso = controllerConcurso(sql);
const pessoa = controllerPessoa(sql);
const participacao = controllerParticipacao(sql);
const voto = controllerVoto(sql);

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

router.get("/administracao", (req, res) => {
  res.send(
    render(Administracao, null, { titulo: "Administracao" })
  );
});

router.get("/administracao/limpar", async (req, res) => {
  await sql`DROP TABLE voto;`;
  await sql`DROP TABLE participacao;`;
  await sql`DROP TABLE concurso;`;
  await sql`DROP TABLE pessoa;`;

  res.redirect("/");
});

//  res.send(render(CadastrarConcurso, null, { navBar: true }));
router.get("/concurso/novo", concurso.getCadastrar);
router.post("/concurso/novo", concurso.postCadastrar);
router.get("/concurso/listar", concurso.getListar);

router.get("/votar/:id", voto.getIndex);
router.get("/votar/novo/:id", voto.getNovoVoto);
