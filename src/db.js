import PostgreSQL from "postgres";

export const configuracaoEmpresa = {
  nome: "waystar | ROYCO",
  icone: "/icone.png",
  cor: "#0F0F0F",
  tiposDeConcurso: [
    ""
  ],
};

export const sql = PostgreSQL();

sql`
  CREATE TABLE IF NOT EXISTS configuracao (
    chave TEXT PRIMARY KEY,
    valor TEXT NOT NULL
  );
`;
