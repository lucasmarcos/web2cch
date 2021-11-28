import { sql } from "../utils.js";

export const CREATE_TABLE = sql`
  CREATE TABLE IF NOT EXISTS pessoa (
    id INTEGER PRIMARY KEY,
    nome TEXT
  );
`;

export default (db) => {
  const stmListar = db.prepare("SELECT id, nome FROM pessoa;");
  const stmInserir = db.prepare("INSERT INTO pessoa (nome) VALUES (?);");

  return {
    inserir: nome => {
      stmInserir.run(nome);
    },

    listar: () => {
      return stmListar.all();
    },
  };
};
