import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'

import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render( // tem chance do elemento não existir, ai coloco o "!" para ter com certeza
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
