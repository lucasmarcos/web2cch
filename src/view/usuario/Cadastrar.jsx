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

        <label>
          Tipo
        </label>
        <input type="text"></input>

        <label>
          Colaborador? Familiar?
        </label>
        <input type="text"></input>

        <button action="submit">Cadastrar</button>

      </form>
    </div>
  );
};
