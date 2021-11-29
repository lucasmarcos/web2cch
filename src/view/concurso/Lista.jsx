export const ListaConcursos = ({ concursos }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Tipo</th>
          <th>Ínicio</th>
          <th>Encerramento</th>
          <th>Participar</th>
        </tr>
      </thead>
      <tbody>
        {concursos.map(concurso =>
          <tr key={concurso.id}>
            <td>{concurso.nome}</td>
            <td>{concurso.tipo}</td>
            <td>{concurso.inicio}</td>
            <td>{concurso.encerramento}</td>
            <td>
              <a href={`/concurso/${concurso.id}`}>Detalhes</a>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};


