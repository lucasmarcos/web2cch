export default sql => {
  sql`
    CREATE TABLE IF NOT EXISTS participacao (
      id SERIAL PRIMARY KEY,
      nome TEXT,
      pessoa INTEGER REFERENCES pessoa(id),
      concurso INTEGER REFERENCES concurso(id)
    );
  `;

  return {
    init: async _ => {
    },

    buscar: async id => {
      const [ participacao ] = await sql`
        SELECT
          participacao.id AS "id",
          participacao.nome AS "nome",
          COUNT(voto.id) AS "votos"
        FROM participacao
        LEFT JOIN voto
        ON participacao.id = voto.participacao
        WHERE participacao.id = ${id}
        GROUP BY participacao.id;
      `;

      return participacao;
    },

    cadastrar: (concurso, pessoa, nome) => {
      sql`
        INSERT INTO
          participacao (nome, pessoa, concurso)
        VALUES
          (${nome}, ${pessoa}, ${concurso});
      `;
    },

    buscarParticipacoesDe: async concurso => {
      const lista = await sql`
        SELECT id, nome
        FROM participacao
        WHERE concurso = ${concurso};
      `;

      return lista;
    }
  };
};
