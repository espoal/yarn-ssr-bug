import React from 'react'
import { StaticRouter } from 'react-router-dom/server.js'
import { renderToReadableStream } from 'react-dom/server.browser'
import { App } from './app.mjs'


const stream = await renderToReadableStream(
  <React.StrictMode>
    <StaticRouter location={"/"}>
      <App />
    </StaticRouter>
  </React.StrictMode>, {})



for await (const chunk of stream)
  console.log({ chunk })
