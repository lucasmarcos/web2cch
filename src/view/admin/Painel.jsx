export const Administracao = () => {
  return (
    <div>
      <a href="/administracao/limpar">Deletar tudo</a>

      <form>

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
