export const ListaConcursos = ({ concursos }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
        </tr>
      </thead>
      <tbody>
        {concursos.map(concurso => 
          <tr key={concurso.id}>
            <td>{concurso.id}</td>
            <td>{concurso.nome}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
