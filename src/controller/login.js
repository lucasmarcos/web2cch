import session from "express-session";

const s = new session({
  resave: false,
  saveUninitialized: false,
  secret: "2920c10d-9963-40de-9ee9-0d42202944da",
});

export const autenticacao = (req, res, next) => {
  // s(req, res);
  next();
};
