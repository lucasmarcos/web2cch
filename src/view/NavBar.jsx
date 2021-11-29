export const NavBar = () => {
  return (
    <nav>
      <ul className="nav">

        <li>
          <a href="/">Empresa</a>
        </li>

        <li>
          <a href="/concurso/lista">Concursos</a>
        </li>

        <li>
          <a href="/login">Entrar</a>
        </li>

        <li>
          <a href="/administracao" alt="A administração daqui não é das melhores...">Admin</a>
        </li>

      </ul>
    </nav>
  );
};
