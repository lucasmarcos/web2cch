import modelVoto from "../model/voto.js";

import { render } from "../render.js";

import { Votar } from "../view/votacao/Votar.js";

export default sql => {
  const voto = modelVoto(sql);

  return {
    getIndex: async (req, res) => {
      const { id } = req.params;

      const votos = await voto.contar(id);

      res.send(
        render(Votar, { votos, id })
      );
    },

    getNovoVoto: (req, res) => {
      const { id } = req.params;
      voto.inserir(id);
      res.redirect("/");
    }
  };
};
