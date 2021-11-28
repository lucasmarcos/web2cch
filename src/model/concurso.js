import { sql } from "../utils.js";

export const CREATE_TABLE = sql`
  CREATE TABLE IF NOT EXISTS concurso (
    id INTEGER PRIMARY KEY,
    nome TEXT
  );
`;

export default (db) => {
  const stmListar = db.prepare("SELECT id, nome FROM concurso;");
  const stmInserir = db.prepare("INSERT INTO concurso (nome) VALUES (?);");

  return {
    inserir: nome => {
      stmInserir.run(nome);
    },

    listar: () => {
      return stmListar.all();
    },
  };
};
