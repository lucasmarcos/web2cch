export default sql => {
  sql`
    CREATE TABLE IF NOT EXISTS concurso (
      id SERIAL PRIMARY KEY,
      nome TEXT,
      tipo TEXT
    );
  `;

  return {
    inserir: (nome, tipo) => {
      sql`INSERT INTO concurso (nome, tipo) VALUES (${nome}, ${tipo});`;
    },

    listar: async _ => {
      const concursos = await sql`SELECT id, nome, tipo FROM concurso`;
      return concursos;
    },
  };

};
