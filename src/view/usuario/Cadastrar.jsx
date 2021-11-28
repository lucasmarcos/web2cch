export const CadastrarUsuario = () => {
  return (
    <div>
      <form>

        <label>
          Nome
          <input type="text"></input>
        </label>

        <label>
          E-mail
          <input type="email"></input>
        </label>

        <label>
          Senha
          <input type="password"></input>
        </label>

        <input type="button"></input>

      </form>
    </div>
  );
};
