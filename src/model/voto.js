export default sql => {
  sql`
    CREATE TABLE IF NOT EXISTS voto (
      id SERIAL PRIMARY KEY,
      concurso INTEGER REFERENCES concurso(id),
      data TEXT
    );
  `;

  return {
    inserir: _ => {
    },

    listar: _ => {
    },
  };
};
