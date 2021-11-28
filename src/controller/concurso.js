import { render } from "../render.js";

import { CadastrarConcurso } from "../view/concurso/Cadastrar.js";
import { ListaConcursos } from "../view/concurso/Lista.js";

import modelConcurso from "../model/concurso.js";

export default sql => {
  const concurso = modelConcurso(sql);

  return {
    getCadastrar: (req, res) => {
      res.send(
        render(CadastrarConcurso)
      );
    },

    postCadastrar: (req, res) => {
      const { nome } = req.body;
      concurso.insert(nome);
      res.redirect("/");
    },

    getListar: (_, res) => {
      const todos = concurso.listar();
      res.send(
        render(ListaConcursos, { concursos: todos })
      );
    },
  };
};
