import { sql } from "../utils.js";

export const CREATE_TABLE = sql`
  CREATE TABLE IF NOT EXISTS participacao (
    id INTEGER PRIMARY KEY,
    pessoa INTEGER REFERENCES pessoa(id),
    concurso INTEGER REFERENCES concurso(id)
  );
`;

export default (db) => {
  const stmListar = db.prepare("SELECT id, pessoa, concurso FROM participacao;");
  const stmInserir = db.prepare("INSERT INTO participacao (pessoa, concurso) VALUES (?, ?);");

  return {
    inserir: _ => {
      stmInserir.run([]);
    },

    listar: () => {
      return stmListar.all();
    },
  };
};
