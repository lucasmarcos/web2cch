export const DetalhesConcurso = ({ concurso }) => {
  const { participacoes } = concurso;

  return (
    <div>
      <a href={`/concurso/${concurso.id}/participar`}>Participar</a>

      <h1>{concurso.nome}</h1>
      <h1>{concurso.tipo}</h1>
      <h3>{concurso.inicio}</h3>
      <h3>{concurso.termino}</h3>

      <h1>Participações</h1>

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Detalhes</th>
          </tr>
        </thead>
        <tbody>
          {participacoes.map(participacao =>
            <tr key={participacao.id}>
              <td>
                {participacao.nome}
              </td>
              <td>
                <a href={`/concurso/${concurso.id}/participacao/${participacao.id}`}>Detalhes</a>
              </td>
            </tr>
          )}
        </tbody>
      </table>

    </div>
  );
};
