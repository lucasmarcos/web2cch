import { configuracaoEmpresa } from "../../db.js";

const icon = (
  <svg width="150" height="100">
    <rect width="100%" height="100%" fill="#0F0F0F"/>
    <text x="75" y="50" font-size="18" text-anchor="middle" fill="white" font="bold sans-serif">waystar | ROYCO</text>
  </svg>
);

export const Administracao = () => {
  const tipos = configuracaoEmpresa.tiposDeConcurso;

  console.log(tipos);

  return (
    <div>
      <ul>
      <li>
      <a href="/administracao/limpar">Deletar tudo</a>
      </li>
      <li>
      <a href="/">Cadastrar novo usuário</a>
      </li>
      <li>
      <a href="/">Cadastrar novo concurso</a>
      </li>
      </ul>

      <h2>tipos de concurso</h2>

      <ul>
        {tipos.map(t =>
          <li key={t.tipo}>
            <p>
              <label>{t.tipo}</label>
              <a href="/">x</a>
            </p>
            <p>
              <label>
                envio de arquivos
                <input type="checkbox" checked={t.envioDeArquivos}/>
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
          <input type="text"/>
        </label>

        <label>
          Ícone
          <input type="file"/>
        </label>

        <label>
          Cor
          <input type="color"/>
        </label>

        <button type="submit">Salvar</button>

      </form>
    </div>
  );
};
