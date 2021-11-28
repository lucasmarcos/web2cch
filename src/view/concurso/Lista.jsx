export const ListaConcursos = ({ concursos }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Votação</th>
        </tr>
      </thead>
      <tbody>
        {concursos.map(concurso =>
          <tr key={concurso.id}>
            <td>{concurso.id}</td>
            <td>{concurso.nome}</td>
            <td>
              <a href={`/votar/${concurso.id}`}>Votar</a>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};


