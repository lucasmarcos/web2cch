import { css } from "../utils.js";

const style = css`
  .container: {

  }
`;

export const Template = ({ titulo, navBar, children }) => {
  return (
    <html lang="pt">
      <head>
    
        <meta charSet="utf-8"/>

        <meta name="viewport" content=""/>
        
        <title>{titulo}</title>

        <style>{style}</style>

        <link rel="icon" href="data:"/>

      </head>
      <body>
        { navBar ? <nav></nav> : <></> }

        { children }
      </body>
    </html>
  );
};
