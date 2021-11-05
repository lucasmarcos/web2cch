import SQLite from "better-sqlite3";

import { CREATE_TABLE as createTablePessoa } from "./model/pessoa.js";
import { CREATE_TABLE as createTableConcurso } from "./model/concurso.js";
import { CREATE_TABLE as createTableParticipacao } from "./model/participacao.js";

export const db = SQLite("db.db", { verbose: console.log });

db.prepare(createTablePessoa).run();
db.prepare(createTableConcurso).run();
db.prepare(createTableParticipacao).run();
