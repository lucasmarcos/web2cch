export default sql => {
  sql`
    CREATE TABLE IF NOT EXISTS pessoa (
      id SERIAL PRIMARY KEY,
      nome TEXT
    );
  `;

  return {
    inserir: nome => {
    },

    listar: _ => {
    },
  };
};
