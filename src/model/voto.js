export default sql => {
  sql`
    CREATE TABLE IF NOT EXISTS voto (
      id SERIAL PRIMARY KEY,
      participacao INTEGER REFERENCES participacao(id),
      data TEXT
    );
  `;

  return {
    init: async _ => {
    },

    inserir: id => {
      sql`INSERT INTO voto (participacao, data) VALUES (${id}, '00/00/0000 00:00')`;
    },

    contar: async id => {
      const [ contagem ] = await sql`
        SELECT COUNT(*) FROM voto WHERE participacao = ${id};
      `;

      return contagem["count"];
    },
  };
};
