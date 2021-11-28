import PostgreSQL from "postgres";

import { CREATE_TABLE as createTablePessoa } from "./model/pessoa.js";
import { CREATE_TABLE as createTableConcurso } from "./model/concurso.js";
import { CREATE_TABLE as createTableParticipacao } from "./model/participacao.js";
import { CREATE_TABLE as createTableVoto } from "./model/voto.js";

export const db = PostgreSQL();

db.prepare(createTablePessoa).run();
db.prepare(createTableConcurso).run();
db.prepare(createTableParticipacao).run();
db.prepare(createTableVoto).run();
