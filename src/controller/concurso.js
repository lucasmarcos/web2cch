import modelConcurso from "../model/concurso.js";

import { render } from "../render.js";

import { CadastrarConcurso } from "../view/concurso/Cadastrar.js";
import { ListaConcursos } from "../view/concurso/Lista.js";
import { DetalhesConcurso } from "../view/concurso/Detalhes.js";

export default sql => {
  const concurso = modelConcurso(sql);

  return {
    getCadastrar: (req, res) => {
      res.send(
        render(CadastrarConcurso)
      );
    },

    postCadastrar: (req, res) => {
      const { nome, tipo, edital, inicio, encerramento } = req.body;
      concurso.inserir(nome, tipo, edital, inicio, encerramento);
      res.redirect("/");
    },

    getListar: async (_, res) => {
      const todos = await concurso.listar();
      res.send(
        render(ListaConcursos, { concursos: todos })
      );
    },

    getDetalhes: async (req, res) => {
      const { id } = req.params;

      const detalhes = await concurso.consultar(id);

      res.send(
        render(DetalhesConcurso, { concurso: detalhes })
      );
    }
  };
};
