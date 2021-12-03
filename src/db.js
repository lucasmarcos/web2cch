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

export const construir = async _ => {
  await sql`
    CREATE TABLE IF NOT EXISTS configuracao (
      chave TEXT PRIMARY KEY,
      valor JSONB NOT NULL
    );
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS concurso (
      id SERIAL PRIMARY KEY,
      nome TEXT,
      tipo TEXT
    );
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS participacao (
      id SERIAL PRIMARY KEY,
      nome TEXT,
      pessoa INTEGER REFERENCES pessoa(id),
      concurso INTEGER REFERENCES concurso(id)
    );
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS pessoa (
      id SERIAL PRIMARY KEY,
      nome TEXT,
      email TEXT,
      senha TEXT,
      familiar INTEGER REFERENCES pessoa(id)
    );
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS voto (
      id SERIAL PRIMARY KEY,
      participacao INTEGER REFERENCES participacao(id),
      data TEXT
    );
  `;

  await salvarConfiguracao(configuracaoPadrao);
};

export const destruir = async _ => {
  await sql`DROP TABLE voto;`;
  await sql`DROP TABLE participacao;`;
  await sql`DROP TABLE concurso;`;
  await sql`DROP TABLE pessoa;`;
  await sql`DROP TABLE configuracao;`;
};

export const fullConfTable = async _ => {
  const res = await sql`SELECT chave, valor FROM configuracao`;
  return res;
};

const salvarConfiguracao = async config => {
  await sql`
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
};

export const buscarConfiguracao = async _ => {
  let config = {};

  [ { valor: config.nome } ] = await sql`
    SELECT valor FROM configuracao WHERE chave = 'nome';
  `;

  [ { valor: config.icone } ] = await sql`
    SELECT valor FROM configuracao WHERE chave = 'icone';
  `;

  [ { valor: config.cor } ] = await sql`
    SELECT valor FROM configuracao WHERE chave = 'cor';
  `;

  [ { valor: config.senhaAdmin } ] = await sql`
    SELECT valor FROM configuracao WHERE chave = 'senhaAdmin';
  `;

  [ { valor: config.tiposDeConcurso } ] = await sql`
    SELECT valor FROM configuracao WHERE chave = 'tiposDeConcurso';
  `;

  return config;
};

(async _ => await construir())();
