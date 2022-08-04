// pnp:/home/mamluk/Projects/yarn-ssr-bug/src/readable.mjs
import React2 from "react";
import { StaticRouter } from "react-router-dom/server.js";
import { renderToReadableStream } from "react-dom/server.browser";

// pnp:/home/mamluk/Projects/yarn-ssr-bug/src/app.mjs
import React from "react";
var App = () => /* @__PURE__ */ React.createElement("h1", null, "Hello world!");

// pnp:/home/mamluk/Projects/yarn-ssr-bug/src/readable.mjs
var stream = await renderToReadableStream(
  /* @__PURE__ */ React2.createElement(React2.StrictMode, null, /* @__PURE__ */ React2.createElement(StaticRouter, {
    location: "/"
  }, /* @__PURE__ */ React2.createElement(App, null))),
  {}
);
for await (const chunk of stream)
  console.log({ chunk });
