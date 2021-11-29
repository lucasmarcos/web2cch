export const Detalhes = ({ concurso }) => {
  const { participacoes } = concurso;

  return (
    <div>
      <h1>{concurso.nome}</h1>
      <h3>{concurso.inicio}</h3>
      <h3>{concurso.termino}</h3>
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

            </tr>
          )}
        </tbody>
      </table>

    </div>
  );
};
