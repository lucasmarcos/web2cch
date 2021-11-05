import { render } from "../render.js";

import { CadastrarConcurso } from "../view/concurso/Cadastrar.js";

import concursoModel from "../model/concurso.js";

export default (db) => {
  const concurso = concursoModel(db);

  return {
    getCadastrar: (req, res) => {
      const { nome } = req.body;
      concurso.insert(nome);
      res.redirect("/");
    },

    postCadastrar: (req, res) => {
      const { nome } = req.body;
      concurso.insert(nome);
      res.redirect("/");
    },

    getListar: (_, res) => {
      const todos = concurso.listar();
      const jsons = todos.map(JSON.stringify);
      res.send(jsons);
    },
  };
};
