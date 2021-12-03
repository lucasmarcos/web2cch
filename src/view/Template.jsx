import { buscarConfiguracao } from "../db.js";
import { NavBar } from "./NavBar.js";

export const Template = ({ titulo, navBar, nome, children }) => {
  return (
    <html lang="pt">
      <head>
        <meta charSet="utf-8"/>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"/>

        <link rel="stylesheet" href="/public/index.css"></link>
        <link rel="icon" href="data:"/>

        <title>{titulo}</title>
      </head>
      <body>
        { navBar ? <NavBar nome={nome}/> : <></> }

        { children }
      </body>
    </html>
  );
};
