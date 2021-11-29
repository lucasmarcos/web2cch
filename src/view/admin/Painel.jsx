const icon = (
  <svg width="150" height="100">
    <rect width="100%" height="100%" fill="#0F0F0F"/>
    <text x="75" y="50" font-size="18" text-anchor="middle" fill="white" font="bold sans-serif">waystar | ROYCO</text>
  </svg>
);

export const Administracao = () => {
  return (
    <div>
      <a href="/administracao/limpar">Deletar tudo</a>

      <h2>tipos de concurso</h2>

      <ul>
        <li>1</li>
      </ul>

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

      </form>
    </div>
  );
};
