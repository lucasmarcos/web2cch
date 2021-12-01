import { buscarConfiguracao } from "../db.js";
import { render } from "../render.js";

import { Administracao } from "../view/admin/Painel.js";

export const getAdmin = async (req, res) => {
  const config = await buscarConfiguracao();

  res.send(
    render(Administracao, { config }, { titulo: "Administracao" })
  );
};
