import modelParticipacao from "../model/participacao";

export default (db) => {
  const participacao = modelParticipacao(db);

  return {
    /*
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
    */
  };
};
