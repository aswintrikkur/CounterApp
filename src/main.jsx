import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ConuntProvider } from './context/CountContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

    <ConuntProvider><App /></ConuntProvider>
)
