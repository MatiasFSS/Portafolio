import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Portafolio } from './Portafolio.jsx'
import { BrowserRouter } from 'react-router-dom'
// index.js o main.jsx
import 'bootstrap/dist/css/bootstrap.min.css';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Portafolio />
    </BrowserRouter>
  </StrictMode>,
)
