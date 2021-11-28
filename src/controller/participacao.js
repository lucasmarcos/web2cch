import modelParticipacao from "../model/participacao.js";

import { render } from "../render.js";

export default sql => {
  const participacao = modelParticipacao(sql);

  return {
  };
};
