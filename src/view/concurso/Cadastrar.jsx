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

        <label>
          Início
          <input type="date"/>
        </label>

        <label>
          Encerramento
          <input type="date"/>
        </label>

        <label>
          Tipo select

          <select>
            <option>Música</option>
            <option>Vídeo</option>
            <option>Fotográfia</option>
            <option>Pintura</option>
            <option>Poema</option>
          </select>
        </label>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};
