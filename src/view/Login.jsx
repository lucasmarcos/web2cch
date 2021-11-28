export const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <form className="form">
        <label>E-mail</label>
        <input type="email"/>

        <label>Senha</label>
        <input type="password"/>

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};
