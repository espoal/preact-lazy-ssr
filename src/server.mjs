import { writeFile } from 'node:fs/promises'
import React from 'react'
import { renderToString } from 'preact-render-to-string'
import prepass from 'preact-ssr-prepass'

import { html } from './html.mjs'
import { App } from './App.mjs'

const jsx = () =>
  (<React.StrictMode>
    <App />
  </React.StrictMode>)

const vnode = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)


await prepass(vnode)


const content = renderToString(vnode)

console.log({ content })

/*await writeFile(
  `dist/ssr/index.html`,
  html({ content }))*/
