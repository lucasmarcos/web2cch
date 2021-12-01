import PostgreSQL from "postgres";

export const sql = PostgreSQL();

export const configuracaoPadrao = {
  nome: "waystar | ROYCO",
  icone: "/icone.png",
  cor: "#0F0F0F",
  senhaAdmin: "admin",
  tiposDeConcurso: [
    { tipo: "Poema"},
    { tipo: "Frase" },
    { tipo: "Canção", envioDeArquivos: true  },
    { tipo: "Fotografia", envioDeArquivos: true  },
    { tipo: "Desenho", envioDeArquivos: true  },
    { tipo: "entre outras atividades culturais" },
  ],
};

const construir = () => {
  sql`
    CREATE TABLE IF NOT EXISTS configuracao (
      chave TEXT PRIMARY KEY,
      valor JSONB NOT NULL
    );
  `;

  salvarConfiguracao(configuracaoPadrao);
};

const destruir = () => {
};

const salvarConfiguracao = config => {
  sql`
    INSERT INTO
      configuracao (chave, valor)
    VALUES
      ('nome', ${sql.json(config.nome)}),
      ('icone', ${sql.json(config.icone)}),
      ('senhaAdmin', ${sql.json(config.senhaAdmin)}),
      ('tiposDeConcurso', ${sql.json(config.tiposDeConcurso)}),
      ('cor', ${sql.json(config.cor)})
    ON CONFLICT (chave)
    DO UPDATE SET valor = EXCLUDED.valor;
  `;
}

export const buscarConfiguracao = async _ => {
  let config = {};

  [ { valor: config.nome } ] = await sql`SELECT valor FROM configuracao WHERE chave = 'nome';`;
  [ { valor: config.icone } ] = await sql`SELECT valor FROM configuracao WHERE chave = 'icone';`;
  [ { valor: config.cor } ] = await sql`SELECT valor FROM configuracao WHERE chave = 'cor';`;
  [ { valor: config.senhaAdmin } ] = await sql`SELECT valor FROM configuracao WHERE chave = 'senhaAdmin';`;
  [ { valor: config.tiposDeConcurso } ] = await sql`SELECT valor FROM configuracao WHERE chave = 'tiposDeConcurso';`;

  return config;
};
