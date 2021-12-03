export default sql => {
  return {
    inserir: id => {
      sql`INSERT INTO voto (participacao, data) VALUES (${id}, ${Date.now()})`;
    },

    contar: async id => {
      const [ contagem ] = await sql`
        SELECT COUNT(*) FROM voto WHERE participacao = ${id};
      `;

      return contagem["count"];
    },
  };
};
