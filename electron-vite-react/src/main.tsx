import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Components/Home'
import './samples/node-api'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)

postMessage({ payload: 'removeLoading' }, '*')
