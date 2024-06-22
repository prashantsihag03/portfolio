import { createRoot } from 'react-dom/client'
import App from './components/App'
import React from 'react'
import '@fontsource/michroma'
import '@fontsource/inter'

const container = document.getElementById('root') as Element
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
