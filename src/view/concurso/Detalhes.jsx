export const DetalhesConcurso = ({ concurso }) => {
  const { participacoes } = concurso;

  const link = (c, p) =>
    <a href={`/concurso/${c}/participacao/${p}`}>
      Detalhes
    </a>;

  return (
    <div>
      <a href={`/concurso/${concurso.id}/participar`}>Participar</a>

      <h1>{concurso.nome}</h1>
      <h1>{concurso.tipo}</h1>
      <h1>{concurso.edital}</h1>
      <h3>{concurso.inicio}</h3>
      <h3>{concurso.encerramento}</h3>

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
                {link(concurso.id, participacao.id)}
              </td>
            </tr>
          )}
        </tbody>
      </table>

    </div>
  );
};
