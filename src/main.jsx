import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Portafolio } from './Portafolio.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Portafolio />
    </BrowserRouter>
  </StrictMode>,
)
