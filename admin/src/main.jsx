import { StrictMode } from 'react'
import ReactDom from 'react-dom/client'
import  { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDom.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
