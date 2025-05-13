import { Route, Routes } from "react-router-dom"
import {Presentacion, Habilidades, Experiencia} from "../pages"




export const PortafolioRoute = () => {
  return (
    <>
        <Routes>
            <Route path="/*" element={<Presentacion/>}/>
            <Route path="/Habilidades" element={<Habilidades/>}/>
            <Route path="/Experiencia" element={<Experiencia/>}/>
        </Routes>
    </>
  )
}

