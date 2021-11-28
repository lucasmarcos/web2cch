import { sql } from "../utils.js";

export const CREATE_TABLE = sql`
  CREATE TABLE IF NOT EXISTS voto (
    id INTEGER PRIMARY KEY,
    concurso INTEGER REFERENCES concurso(id),
    data TEXT
  );
`;

export default (db) => {
  const stmListar = db.prepare("SELECT id, concurso, data FROM voto;");
  const stmInserir = db.prepare("INSERT INTO voto (concurso, data) VALUES (?, ?);");

  return {
    inserir: _ => {
      stmInserir.run([]);
    },

    listar: () => {
      return stmListar.all();
    },
  };
};
