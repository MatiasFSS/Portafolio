import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Portafolio } from './Portafolio.jsx'
import { BrowserRouter } from 'react-router-dom'
import './styles/App.css'
import { InfoProvider } from './context/InfoProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InfoProvider>
      <BrowserRouter>
        <Portafolio/>
      </BrowserRouter>
    </InfoProvider>
  </StrictMode>,
)
