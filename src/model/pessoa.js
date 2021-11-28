export default sql => {
  sql`
    CREATE TABLE IF NOT EXISTS pessoa (
      id SERIAL PRIMARY KEY,
      nome TEXT,
      email TEXT,
      senha TEXT
    );
  `;

  return {
    inserir: (nome, email, senha) => {
      sql`INSERT INTO pessoa (nome, email, senha) VALUES (${nome}, ${email}, ${senha})`;
    },

    listar: async _ => {
      const pessoas = await sql`SELECT id, nome, email FROM pessoa`;
      return pessoas;
    },
  };
};
