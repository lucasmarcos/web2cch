import modelPessoa from "../model/pessoa.js";

import { render } from "../render.js";

export default sql => {
  const pessoa = modelPessoa(sql);

  return {
  };
};
