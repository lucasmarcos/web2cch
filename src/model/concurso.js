import modelParticipacao from "./participacao.js";

export default sql => {
  const participacao = modelParticipacao(sql);

  return {
    inserir: (nome, tipo, edital, inicio, encerramento) => {
      sql`
        INSERT INTO concurso
          (nome, tipo, edital, inicio, encerramento)
        VALUES
          (${nome}, ${tipo}, ${edital}, ${inicio}, ${encerramento});
      `;
    },

    listar: async _ => {
      const concursos = await sql`
        SELECT
          id, nome, tipo, edital, inicio, encerramento
        FROM concurso;
      `;

      return concursos;
    },

    consultar: async id => {
      let [ concurso ] = await sql`
        SELECT
          id, nome, tipo, edital, inicio, encerramento
        FROM concurso
        WHERE id = ${id}
      ;`;

      concurso.participacoes = await participacao.buscarParticipacoesDe(id);

      return concurso;
    },

    listarConcursosAbertos: async _ => {
      return [];
    }
  };

};
