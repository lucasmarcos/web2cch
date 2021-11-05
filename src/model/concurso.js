import { sql } from "../utils.js";

export const CREATE_TABLE = sql`
  CREATE TABLE IF NOT EXISTS concurso (
    id INTEGER PRIMARY KEY,
    nome TEXT
  );
`;
