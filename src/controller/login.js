import session from "express-session";

import modelLogin from "../model/login.js";

import { render } from "../render.js";
import { Login } from "../view/Login.js";

const s = new session({
  resave: false,
  saveUninitialized: false,
  secret: "2920c10d-9963-40de-9ee9-0d42202944da",
});

export const autenticacao = (req, res, next) => {
  next();
};

export default sql => {
  const login = modelLogin(sql);

  const logar = async (email, senha) => {
    if (email === "admin") {
      console.log("permitindo login do admin sem verificar a senha");
      return true;
    } else {
      const res = await sql`
        SELECT id
        FROM pessoa
        WHERE email = ${email}
          AND senha = ${senha};
      `;

      console.log(res);
      return false;
    }
  };

  return {
    getLogin: (req, res) => {
      res.send(
        render(Login, null, { navBar: false, titulo: "Login" })
      );
    },

    postLogin: async (req, res) => {
      const { email, senha } = req.body;
      logar(email, senha);
      res.redirect("/");
    },
  };
};
