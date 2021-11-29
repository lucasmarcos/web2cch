import PostgreSQL from "postgres";

export const sql = PostgreSQL();

sql`
  CREATE TABLE IF NOT EXISTS configuracao (
    chave TEXT PRIMARY KEY,
    valor JSONB NOT NULL
  );
`;

export const configuracaoEmpresa = {
  nome: "waystar | ROYCO",
  icone: "/icone.png",
  cor: "#0F0F0F",
  tiposDeConcurso: [
    { tipo: "Poema"},
    { tipo: "Frase" },
    { tipo: "Canção", envioDeArquivos: true  },
    { tipo: "Fotografia", envioDeArquivos: true  },
    { tipo: "Desenho", envioDeArquivos: true  },
    { tipo: "entre outras atividades culturais" },
  ],
};

const salvarConfiguracao = config => {
  sql`
    INSERT INTO
      configuracao (chave, valor)
    VALUES
      ('nome', ${config.nome}),
      ('icone', ${config.icone}),
      ('cor', ${config.cor});
  `;
}

const buscarConfiguracao = async _ => {
  let config = {};

  config.nome = await sql`SELECT valor FROM configuracao WHERE chave = 'nome';`;
  config.icone = await sql`SELECT valor FROM configuracao WHERE chave = 'nome';`;
  config.cor = await sql`SELECT valor FROM configuracao WHERE chave = 'nome';`;

  return config;
}
