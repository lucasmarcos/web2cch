import modelPessoa from "../model/pessoa.js";

import { render } from "../render.js";

import { CadastrarUsuario } from "../view/usuario/Cadastrar.js";
import { ListaUsuarios } from "../view/usuario/Lista.js";

export default sql => {
  const pessoa = modelPessoa(sql);

  return {
    getCadastrar: async (_, res) => {
      res.send(
        render(CadastrarUsuario)
      );
    },

    postCadastrar: async (req, res) => {
      const { nome, email, senha } = req.body;
      pessoa.inserir(nome, email, senha);
      res.redirect("/");
    },

    getLista: async (_, res) => {
      const pessoas = await pessoa.listar();
      res.send(
        render(ListaUsuarios, { pessoas })
      );
    },

    getCadastrarFamiliar: async (req, res) => {
      res.redirect("/");
    },

    postCadastrarFamiliar: async (req, res) => {
      res.redirect("/");
    },
  };
};
