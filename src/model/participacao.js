export default sql => {
  sql`
    CREATE TABLE IF NOT EXISTS participacao (
      id SERIAL PRIMARY KEY,
      pessoa INTEGER REFERENCES pessoa(id),
      concurso INTEGER REFERENCES concurso(id)
    );
  `;

  return {
    inserir: _ => {
    },

    listar: _ => {
    },
  };
};
