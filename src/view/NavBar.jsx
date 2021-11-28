export const NavBar = () => {
  return (
    <nav>
      <ul className="nav">

        <li>
          <a href="/">Página inicial</a>
        </li>

        <li>
          <a href="/login">Login</a>
        </li>

        <li>
          <a href="/concurso/novo">Novo concurso</a>
        </li>

        <li>
          <a href="/concurso/lista">Lista de concursos</a>
        </li>

        <li>
          <a href="/participacao/novo">Nova participação</a>
        </li>

        <li>
          <a href="/participacao/lista">Lista de participações</a>
        </li>

        <li>
          <a href="/usuario/novo">Novo usuario</a>
        </li>

        <li>
          <a href="/usuario/lista">Lista de usuários</a>
        </li>

        <li>
          <a href="/administracao">A administração daqui não é das melhores...</a>
        </li>

      </ul>
    </nav>
  );
};
