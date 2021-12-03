export const CadastrarConcurso = ({ tipos }) => {
  const hoje = new Date().toJSON().slice(0, 10);

  return (
    <div>
      <form action="/concurso/novo" method="post" className="form">
        <label>Nome</label>
        <input type="text" name="nome"/>

        <label>Edital</label>
        <textarea rows="3" cols="40" name="edital"/>

        <label>Início</label>
        <input type="date" name="inicio" defaultValue={hoje}/>

        <label>Encerramento</label>
        <input type="date" name="encerramento" defaultValue={hoje}/>

        <label>Tipo</label>
        <select name="tipo">
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
