export default sql => {
  sql`
    CREATE TABLE IF NOT EXISTS pessoa (
      id INTEGER PRIMARY KEY,
      nome TEXT
    );
  `;

  /*
  const stmListar = sql`SELECT id, nome FROM pessoa;`;
  const stmInserir = sql`INSERT INTO pessoa (nome) VALUES (?);`;
  */

  return {
    inserir: nome => {
      // stmInserir.run(nome);
    },

    listar: () => {
      // return stmListar.all();
    },
  };
};
