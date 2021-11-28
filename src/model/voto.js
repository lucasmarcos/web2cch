export default sql => {
  sql`
    CREATE TABLE IF NOT EXISTS voto (
      id INTEGER PRIMARY KEY,
      concurso INTEGER REFERENCES concurso(id),
      data TEXT
    );
  `;

  /*
  const stmListar = sql`SELECT id, concurso, data FROM voto;`;
  const stmInserir = sql`INSERT INTO voto (concurso, data) VALUES (?, ?);`;
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
