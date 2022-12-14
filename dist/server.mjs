// pnp:/home/mamluk/Projects/yarn-ssr-bug/src/server.mjs
import React2 from "react";
import { StaticRouter } from "react-router-dom/server.js";
import { renderToPipeableStream } from "react-dom/server";

// pnp:/home/mamluk/Projects/yarn-ssr-bug/src/app.mjs
import React from "react";
var App = () => /* @__PURE__ */ React.createElement("h1", null, "Hello world!");

// pnp:/home/mamluk/Projects/yarn-ssr-bug/src/server.mjs
import { PassThrough } from "node:stream";
var stream = renderToPipeableStream(
  /* @__PURE__ */ React2.createElement(React2.StrictMode, null, /* @__PURE__ */ React2.createElement(StaticRouter, {
    location: "/"
  }, /* @__PURE__ */ React2.createElement(App, null))),
  {}
);
var pass = new PassThrough({ encoding: "utf8" });
stream.pipe(pass);
for await (const chunk of pass)
  console.log({ chunk });
