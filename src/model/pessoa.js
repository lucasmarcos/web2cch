import { sql } from "../utils.js";

export const CREATE_TABLE = sql`
  CREATE TABLE IF NOT EXISTS pessoa (
    id INTEGER PRIMARY KEY,
    nome TEXT
  );
`;
