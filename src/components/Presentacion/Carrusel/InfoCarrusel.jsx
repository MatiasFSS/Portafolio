import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faUserGraduate, faAddressBook, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { CardInfo } from "../Cards/CardInfo";
import { useCarrusel } from "../../../hooks/useCarrusel";

export const InfoCarousel = ({ infoContacto, infoEducacion, id}) => {
    useCarrusel(id)
  
    // console.log(infoContacto)
    // console.log(infoEducacion)
    if (!infoContacto || !infoEducacion) {
      return <div>Cargando información...</div>;
    }
  return (
    <div id={id} className="carousel slide">
      <div className="carousel-inner h-100">
        <div className="carousel-item active h-100">
          <CardInfo icon={faAddressBook} title=" Contacto">
            <p><strong>Teléfono:</strong> {infoContacto.telefono}</p>
            <p><strong>Email:</strong> {infoContacto.email}</p>
            <p><strong>Ubicación:</strong> {infoContacto.ubicacion}</p>
          </CardInfo>
        </div>
        <div className="carousel-item h-100">
          <CardInfo icon={faUserGraduate} title=" Educación">
            <p className="fw-semibold">{infoEducacion.carrera}</p>
            <p className="text-light-muted">{infoEducacion.universidad}</p>
            <p className="text-light-muted">{infoEducacion.fecha}</p>
            <p>{infoEducacion.ciudad}</p>
          </CardInfo>
        </div>
        <div className="carousel-item h-100">
          <CardInfo icon={faShareAlt} title=" Redes Profesionales">
            <div className="d-flex justify-content-around align-items-center pt-2">
              <div className="text-center">
                <a href="https://www.linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff' }}>
                  <FontAwesomeIcon icon={faLinkedin} size="3x" />
                </a>
                <p className="fw-semibold">LinkedIn</p>
              </div>
              <div className="text-center">
                <a href="https://github.com/tu-perfil" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff' }}>
                  <FontAwesomeIcon icon={faSquareGithub} size="3x" />
                </a>
                <p className="fw-semibold">GitHub</p>
              </div>
            </div>
          </CardInfo>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target={`#${id}`} data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target={`#${id}`} data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};
