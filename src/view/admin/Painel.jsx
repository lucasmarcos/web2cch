const icon = (
  <svg width="150" height="100">
    <rect width="100%" height="100%" fill="#0F0F0F"/>
    <text x="75" y="50" font-size="18" text-anchor="middle" fill="white" font="bold sans-serif">waystar | ROYCO</text>
  </svg>
);

export const Administracao = ({ config }) => {
  return (
    <div>

      <ul>
        <li>
          <a href="/administracao/limpar">Deletar tudo</a>
        </li>

        <li>
          <a href="/usuario/novo">Cadastrar novo usuário</a>
        </li>

        <li>
          <a href="/concurso/novo">Cadastrar novo concurso</a>
        </li>

        <li>
          <a href="/usuario/lista">Lista usuario</a>
        </li>
      </ul>

      <h2>tipos de concurso</h2>

      <ul>
        {config.tiposDeConcurso.map(t =>
          <li key={t.tipo}>
            <p>
              <label>{t.tipo}</label>
              <a href="/">x</a>
            </p>
            <p>
              <label>
                envio de arquivos
                <input type="checkbox" defaultChecked={t.envioDeArquivos}/>
              </label>
            </p>
          </li>
        )}
      </ul>
      <a href="/">adicionar</a>

      <form className="form">

        <h3>Empresa</h3>

        <label>
          Nome
          <h2>{config.nome}</h2>
          <input type="text"/>
        </label>

        <label>
          Ícone
          <h2>{config.icone}</h2>
          <input type="file"/>
        </label>

        <label>
          Cor
          <h2>{config.cor}</h2>
          <input type="color"/>
        </label>

        <button type="submit">Salvar</button>

      </form>

      <h2>senha do admin</h2>
      <h2>{config.senhaAdmin}</h2>

      <pre>
        coisas pra ficar nesse menu:

        cadastrar novos usuarios
        cadastrar novos concursos

        ver todos os usuarios
      </pre>
    </div>
  );
};
