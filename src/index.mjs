import React from 'react'
import { createRoot } from 'preact/compat/client'
import { App } from './App'

const container = document.getElementById('root')

createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
