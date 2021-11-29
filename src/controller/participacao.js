import modelParticipacao from "../model/participacao.js";

import { render } from "../render.js";
import { CadastrarParticipacao } from "../view/participacao/Cadastrar.js";
import { DetalhesParticipacao } from "../view/participacao/Detalhes.js";

export default sql => {
  const participacao = modelParticipacao(sql);

  return {
    getDetalhes: async (req, res) => {
      const { id } = req.params;
      const detalhes = await participacao.buscar(id);
      res.send(
        render(DetalhesParticipacao, { participacao: detalhes })
      );
    },

    getCadastrar: (req, res) => {
      const { id } = req.params;

      res.send(
        render(CadastrarParticipacao, { concurso: id })
      );
    },

    postCadastrar: (req, res) => {
      const { concurso, nome } = req.body;

      participacao.cadastrar(concurso, 1, nome);

      res.redirect("/");
    }
  };
};
