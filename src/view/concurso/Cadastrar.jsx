export const CadastrarConcurso = () => {
  return (
    <div>
      <form action="/concurso/novo" method="post">
        <label>
          Nome
          <input type="text" name="nome"/>
        </label>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};
