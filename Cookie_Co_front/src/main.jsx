import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AxiosCookieIdProvider from './context/AxiosCookieIdContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AxiosCookieIdProvider>

        <App />
      </AxiosCookieIdProvider>
    </BrowserRouter>
  </StrictMode>,
)
