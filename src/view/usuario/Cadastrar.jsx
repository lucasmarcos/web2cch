export const CadastrarUsuario = () => {
  return (
    <div>
      <form className="form" method="post" action="/usuario/novo">

        <label>Nome</label>
        <input type="text" name="nome"/>

        <label>E-mail</label>
        <input type="email" name="email"></input>

        <label>
        Senha
        </label>
        <input type="password" name="senha"></input>

        <a href="/">adcionar familia</a>

        <button action="submit">Cadastrar</button>

      </form>
    </div>
  );
};
