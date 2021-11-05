import { sql } from "../utils.js";

export const CREATE_TABLE = sql`
  CREATE TABLE IF NOT EXISTS participacao (
    id INTEGER PRIMARY KEY,
    pessoa INTEGER REFERECES pessoa(id),
    concurso INTEGER REFERENCES concurso(id)
  );
`;
