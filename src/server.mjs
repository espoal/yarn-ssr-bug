import React from 'react'
import { StaticRouter } from 'react-router-dom/server'
import { renderToPipeableStream } from 'react-dom/server'
import { App } from './app.mjs'
import { PassThrough } from 'node:stream'


const stream = renderToPipeableStream(
  <React.StrictMode>
    <StaticRouter location={"/"}>
      <App />
    </StaticRouter>
  </React.StrictMode>, {})


const pass = new PassThrough({ encoding: 'utf8'})
stream.pipe(pass)


for await (const chunk of pass)
  console.log({ chunk })
