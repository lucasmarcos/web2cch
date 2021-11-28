export default sql => {
  sql`
    CREATE TABLE IF NOT EXISTS concurso (
      id INTEGER PRIMARY KEY,
      nome TEXT
    );
  `;

  /*
  const stmListar = sql`SELECT id, nome FROM concurso;`;
  const stmInserir = sql`INSERT INTO concurso (nome) VALUES (?);`;
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
