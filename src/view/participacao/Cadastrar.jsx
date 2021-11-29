export const CadastrarParticipacao = ({ concurso }) => {
  return (
    <div>
      <h2>participando de {concurso}</h2>
      <form className="form" method="post" action={`/concurso/${concurso}/participar`}>

        <input type="hidden" value={concurso} name="concurso"/>

        <label htmlFor="nome">Nome</label>
        <input type="text" name="nome"/>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};
