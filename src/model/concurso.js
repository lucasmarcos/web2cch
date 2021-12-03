import modelParticipacao from "./participacao.js";

export default sql => {
  const participacao = modelParticipacao(sql);

  return {
    inserir: (nome, tipo) => {
      sql`INSERT INTO concurso (nome, tipo) VALUES (${nome}, ${tipo});`;
    },

    listar: async _ => {
      const concursos = await sql`SELECT id, nome, tipo FROM concurso`;
      return concursos;
    },

    consultar: async id => {
      let [ concurso ] = await sql`SELECT id, nome, tipo FROM concurso WHERE id = ${id}`;

      concurso.participacoes = await participacao.buscarParticipacoesDe(id);

      return concurso;
    }
  };

};
