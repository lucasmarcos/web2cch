export const Login = () => {
  return (
    <div className="login">
      <h1>Bem-vindo</h1>

      <form className="form" method="post" action="/login">
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email"/>

        <label htmlFor="senha">Senha</label>
        <input type="password" name="senha"/>

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};
