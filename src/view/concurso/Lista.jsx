export const ListaConcursos = ({ concursos }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Tipo</th>
          <th>Ínicio</th>
          <th>Encerramento</th>
          <th>Votação</th>
        </tr>
      </thead>
      <tbody>
        {concursos.map(concurso =>
          <tr key={concurso.id}>
            <td>{concurso.nome}</td>
            <td>{concurso.tipo}</td>
            <td>00/00/0000 00:00</td>
            <td>00/00/0000 00:00</td>
            <td>
              <a href={`/votar/${concurso.id}`}>Votar</a>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};


