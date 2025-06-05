import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"
import { Modal } from "./Modal";



export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => setIsOpen(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            const navbar = document.getElementById("navbarNav");
            const toggler = document.querySelector(".navbar-toggler");

            if (isOpen && navbar && !navbar.contains(event.target) &&!toggler.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isOpen]);

  return (
    <nav className="navbar navbar-expand-lg navBarCustom fixed-top shadow-sm">
      <button
        className={`navbar-toggler ${isOpen ? "open" : ""}`}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item px-3">
            <NavLink className="nav-link" to="/" onClick={handleNavClick}>
              Presentación
            </NavLink>
          </li>
          <li className="nav-item px-3">
            <NavLink className="nav-link" to="/habilidades" onClick={handleNavClick}>
              Habilidades
            </NavLink>
          </li>
          <li className="nav-item px-3">
            <NavLink className="nav-link" to="/experiencia" onClick={handleNavClick}>
              Experiencia
            </NavLink>
          </li>
          <li className="nav-item px-3 w-100">
            <div className="w-100">
                <Modal />
            </div>
            </li>
        </ul>
      </div>
    </nav>
  );
};