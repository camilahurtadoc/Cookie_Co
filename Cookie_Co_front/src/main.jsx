import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AxiosCookieIdProvider from './context/AxiosCookieIdContext.jsx'
import AxiosCookiesProvider from './context/AxiosCookiesContext.jsx'
import CartProvider from './context/CartContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AxiosCookiesProvider>
        <AxiosCookieIdProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </AxiosCookieIdProvider>
      </AxiosCookiesProvider>
    </BrowserRouter>
  </StrictMode>,
)
