export const CadastrarConcurso = () => {
  return (
    <div>
      <form action="/concurso/novo" method="post" className="form">
        <label>Nome</label>
        <input type="text" name="nome"/>

        <label>Tipo</label>
        <input type="text" name="tipo"/>

        <label>Início</label>
        <input type="date"/>

        <label>Encerramento</label>
        <input type="date"/>

        <label>Tipo (versão select html)</label>
        <select>
            <option>Música</option>
            <option>Vídeo</option>
            <option>Fotográfia</option>
            <option>Pintura</option>
            <option>Poema</option>
          </select>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};
