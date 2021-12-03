export default sql => {
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
