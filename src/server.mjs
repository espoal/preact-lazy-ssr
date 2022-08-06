import { writeFile } from 'node:fs/promises'
import React from 'react'
import { renderToString } from 'preact-render-to-string'

import { html } from './html.mjs'
import { App } from './App.mjs'

const jsx = () =>
  (<React.StrictMode>
    <App />
  </React.StrictMode>)




const content = renderToString(jsx())

await writeFile(
  `dist/ssr/index.html`,
  html({ content }))
