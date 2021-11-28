export default sql => {
  sql`
    CREATE TABLE IF NOT EXISTS concurso (
      id SERIAL PRIMARY KEY,
      nome TEXT
    );
  `;

  return {
    inserir: nome => {
      sql`INSERT INTO concurso (nome) VALUES (${nome});`;
    },

    listar: async _ => {
      const concursos = await sql`SELECT id, nome FROM concurso`;
      return concursos;
    },
  };

};
