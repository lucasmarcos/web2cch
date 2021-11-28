import { css } from "../utils.js";

import { NavBar } from "./NavBar.js";

const style = css`
  .container: {

  }
`;

export const Template = ({ titulo, navBar, children }) => {
  return (
    <html lang="pt">
      <head>

        <meta charSet="utf-8"/>

        <meta name="viewport" content="width=device-width, initial-scale=1"/>

        <title>{titulo}</title>

        <style>{style}</style>

        <link rel="icon" href="data:"/>

      </head>
      <body>
        { navBar ? <NavBar/> : <></> }

        { children }
      </body>
    </html>
  );
};
