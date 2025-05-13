import { NavLink } from "react-router-dom"
import './navbar.css';



export const Navbar = () => {
  return (
    <>
       <nav className="navbar navbar-expand-lg navbar-light  px-4  background-navbar border-radius-3">

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/" end>Presentación</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/habilidades">Habilidades</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/experiencia">Experiencia</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}


