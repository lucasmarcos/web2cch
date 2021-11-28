export const CadastrarConcurso = () => {
  return (
    <div>
      <form action="/concurso/novo" method="post">
        <label>
          Nome
          <input type="text" name="nome"/>
        </label>

        <label>
          Tipo
          <input type="text" name="tipo"/>
        </label>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};
