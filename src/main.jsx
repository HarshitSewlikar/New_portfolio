import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Bootstrap grid/layout utilities only (bootstrap-grid excludes Bootstrap Reboot),
// so it adds responsive layout helpers WITHOUT overriding Tailwind's Preflight or
// the bespoke dark/neon design. Loaded before index.css so Tailwind stays authoritative.
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)