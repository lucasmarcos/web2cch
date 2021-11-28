export default sql => {
  sql`
    CREATE TABLE IF NOT EXISTS participacao (
      id INTEGER PRIMARY KEY,
      pessoa INTEGER REFERENCES pessoa(id),
      concurso INTEGER REFERENCES concurso(id)
    );
  `;

  /*
  const stmListar = sql`SELECT id, pessoa, concurso FROM participacao;`;
  const stmInserir = sql`INSERT INTO participacao (pessoa, concurso) VALUES (?, ?);`;
  */

  return {
    inserir: _ => {
      // stmInserir.run([]);
    },

    listar: () => {
      // return stmListar.all();
    },
  };
};
