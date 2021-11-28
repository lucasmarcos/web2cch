export const ListaUsuarios = ({ pessoas }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>E-mail</th>
        </tr>
      </thead>
      <tbody>
        {pessoas.map(pessoa =>
          <tr key={pessoa.id}>
            <td>{pessoa.nome}</td>
            <td>{pessoa.email}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
