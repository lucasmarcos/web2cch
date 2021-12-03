export const ListaUsuarios = ({ pessoas }) => {
  const link = id => <a href={`/usuario/novo/familiar/${id}`}>Adicionar</a>;
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Familiar</th>
        </tr>
      </thead>
      <tbody>
        {pessoas.map(pessoa =>
          <tr key={pessoa.id}>
            <td>{pessoa.nome}</td>
            <td>{pessoa.email}</td>
            <td>{link(pessoa.id)}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
