import { sql } from "../utils.js";

export const CREATE_TABLE = sql`
  CREATE TABLE IF NOT EXISTS concurso (
    id INTEGER PRIMARY KEY,
    nome TEXT
  );
`;

export default (db) => {
  const listarStm = db.prepare("SELECT id, nome FROM concurso;");
  const insertStm = db.prepare("INSERT INTO concurso (nome) VALUES (?);");

  return {

    insert: nome => {
      insertStm.run(nome);
    },

    listar: () => {
      return listarStm.all();
    },
  };
};
