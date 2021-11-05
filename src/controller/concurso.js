import { render } from "../render.js";

import concursoModel from "../model/concurso.js";

export default (db) => {
  const concurso = concursoModel(db);

  return {
    cadastrar: (req, res) => {
      const { nome } = req.body;
      concurso.insert(nome);
      res.redirect("/");
    },

    listar: (_, res) => {
      const todos = concurso.listar();
      const jsons = todos.map(JSON.stringify);
      res.send(jsons);
    },
  };
};
