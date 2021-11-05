import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server.js";

import { Template } from "./view/Template.js";

export const render = (Page, props, config = {}) => {
  let navBar = typeof config.navBar === "undefined" ? true : config.navBar;
  const templateProps = {
    navBar, titulo: config.titulo || "Bem-vindo"
  };

  const el = createElement(Page, props)
  const templated = createElement(Template, templateProps, el);
  const rendered = renderToStaticMarkup(templated);

  return "<!doctype html>" + rendered;
};
